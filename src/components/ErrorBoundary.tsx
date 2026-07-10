import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean };

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Site crashed:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-white px-5 text-center">
          <div>
            <p className="text-xl font-semibold text-gray-900">Что-то пошло не так</p>
            <p className="mt-2 text-gray-500">
              Обновите страницу или позвоните нам:{" "}
              <a href="tel:+79173387600" className="text-[#e8702a] font-medium">
                +7 (917) 338-76-00
              </a>
            </p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
