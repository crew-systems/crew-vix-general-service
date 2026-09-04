import React, { Component, ErrorInfo, ReactNode } from "react";
import { COMPANY_INFO } from "../data/landscapingData";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("VIX General Services Uncaught Error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F5F6F8] flex items-center justify-center p-6 text-center font-sans">
          <div className="max-w-md bg-white p-8 rounded-2xl shadow-crisp border border-[#1A2B44]/10">
            <h1 className="text-2xl font-bold text-[#1A2B44] mb-3">
              VIX General Services
            </h1>
            <p className="text-sm text-muted-foreground mb-6">
              An unexpected error occurred while loading this page. Please reload or contact our team directly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#C99A55] text-[#1A2B44] font-bold text-sm shadow-crisp hover:bg-[#D4A55C] transition-all"
              >
                Reload Page
              </button>
              <a
                href="/"
                className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#1A2B44] text-[#EDE4D6] font-bold text-sm shadow-crisp hover:bg-[#243652] transition-all"
              >
                Go to Homepage
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-5">
              Need immediate help? Call us at{" "}
              <a
                href={`tel:+1${COMPANY_INFO.phone.replace(/\D/g, "")}`}
                className="font-bold text-[#1A2B44] underline"
              >
                {COMPANY_INFO.phone}
              </a>
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
