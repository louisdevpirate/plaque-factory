export default function CriticalCSSSimple() {
  return (
    <style
      dangerouslySetInnerHTML={{
        __html: `
          /* Critical CSS - Minimal and safe */
          * {
            box-sizing: border-box;
          }
          
          body {
            margin: 0;
            padding: 0;
            font-family: "Montserrat", sans-serif;
            line-height: 1.6;
          }
          
          .wrapper {
            min-height: 100vh;
          }
          
          /* Critical above-the-fold styles only */
          header {
            padding: 0 1rem;
          }
          
          h1 {
            font-size: 2.5rem;
            font-family: "Raleway", sans-serif;
            line-height: 1.2;
          }
          
          /* Essential animations */
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `,
      }}
    />
  );
}
