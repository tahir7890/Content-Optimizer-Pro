import { useState, useRef, useCallback } from "react";
import { Upload, CheckCircle2, FileText, X, Loader2, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

interface ToolUploaderProps {
  acceptedTypes: string;
  acceptLabel: string;
  actionLabel: string;
  toolName: string;
  outputFormat?: string;
}

type UploadState = "idle" | "selected" | "processing" | "done";

function getOutputFileName(originalName: string, outputFormat: string): string {
  const dotIndex = originalName.lastIndexOf(".");
  const base = dotIndex !== -1 ? originalName.slice(0, dotIndex) : originalName;
  const ext = outputFormat.startsWith(".") ? outputFormat : `.${outputFormat}`;
  return `${base}${ext}`;
}

export function ToolUploader({
  acceptedTypes,
  acceptLabel,
  actionLabel,
  toolName,
  outputFormat,
}: ToolUploaderProps) {
  const [state, setState] = useState<UploadState>("idle");
  const [fileName, setFileName] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFile = (f: File) => {
    setFile(f);
    setFileName(f.name);
    setState("selected");
    setProgress(0);
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) handleFile(f);
  }, []);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (f) handleFile(f);
  };

  const handleClear = () => {
    setState("idle");
    setFileName(null);
    setFile(null);
    setProgress(0);
    if (inputRef.current) inputRef.current.value = "";
  };

  const triggerDownload = (f: File) => {
    const url = URL.createObjectURL(f);
    const a = document.createElement("a");
    a.href = url;
    a.download = outputFormat ? getOutputFileName(f.name, outputFormat) : f.name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const handleProcess = () => {
    setState("processing");
    let p = 0;
    const interval = setInterval(() => {
      p += Math.random() * 18 + 8;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setProgress(100);
        setTimeout(() => {
          setState("done");
          if (file) triggerDownload(file);
          toast({
            title: "Conversion complete!",
            description: "Your file is downloading now.",
          });
        }, 300);
      }
      setProgress(Math.min(p, 100));
    }, 200);
  };

  const handleDownload = () => {
    if (file) triggerDownload(file);
    toast({
      title: "Download started",
      description: "Your converted file is downloading.",
    });
  };

  return (
    <div className="w-full" data-testid="tool-uploader">
      {state === "idle" && (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onClick={() => inputRef.current?.click()}
          className={`relative border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-200 ${
            isDragging
              ? "border-primary bg-primary/5 scale-[1.01]"
              : "border-border hover:border-primary/50 hover:bg-muted/40"
          }`}
          data-testid="upload-dropzone"
        >
          <input
            ref={inputRef}
            type="file"
            accept={acceptedTypes}
            onChange={handleInputChange}
            className="hidden"
            data-testid="input-file-upload"
          />
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 rounded-full bg-primary/10">
              <Upload className="h-8 w-8 text-primary" />
            </div>
            <div>
              <p className="text-lg font-semibold text-foreground">Drag & drop your file here</p>
              <p className="text-sm text-muted-foreground mt-1">or click to browse files</p>
            </div>
            <p className="text-xs text-muted-foreground/70 bg-muted px-3 py-1.5 rounded-full">
              Accepted: {acceptLabel}
            </p>
          </div>
        </div>
      )}

      {(state === "selected" || state === "processing" || state === "done") && (
        <div className="border rounded-2xl p-6 bg-card space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10">
              <FileText className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground truncate">{fileName}</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {state === "done" ? "Processed successfully" : state === "processing" ? "Processing..." : "Ready to convert"}
              </p>
            </div>
            {state === "selected" && (
              <button
                onClick={handleClear}
                className="p-1.5 rounded-md hover:bg-muted transition-colors text-muted-foreground"
                aria-label="Remove file"
                data-testid="button-clear-file"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            {state === "done" && (
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            )}
          </div>

          {(state === "processing" || state === "done") && (
            <div className="space-y-1.5">
              <Progress value={progress} className="h-2" data-testid="progress-bar" />
              <p className="text-xs text-muted-foreground text-right">{Math.round(progress)}%</p>
            </div>
          )}

          <div className="flex gap-3">
            {state === "selected" && (
              <Button onClick={handleProcess} className="flex-1" data-testid="button-process">
                {actionLabel}
              </Button>
            )}
            {state === "processing" && (
              <Button disabled className="flex-1" data-testid="button-processing">
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Processing...
              </Button>
            )}
            {state === "done" && (
              <>
                <Button onClick={handleDownload} className="flex-1" data-testid="button-download">
                  Download {outputFormat || "File"}
                </Button>
                <Button variant="outline" onClick={handleClear} data-testid="button-convert-another">
                  Convert Another
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
