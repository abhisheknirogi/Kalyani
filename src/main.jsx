import { StrictMode, Component } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Error Boundary for catching React errors
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
          <h1>Oops! Something went wrong.</h1>
          <p>Please refresh the page and try again.</p>
          <details style={{ whiteSpace: 'pre-wrap', marginTop: '20px', textAlign: 'left' }}>
            {this.state.error?.toString()}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}

// Web Vitals tracking (logs performance metrics to console)
function trackWebVitals() {
  if ('web-vital' in window) return;
  window['web-vital'] = true;

  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP (Largest Contentful Paint):', lastEntry.renderTime || lastEntry.loadTime);
    });
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  }
}

trackWebVitals();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
