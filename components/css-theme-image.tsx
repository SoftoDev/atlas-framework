export function CssThemeImage() {
  return (
    <div className="relative w-[300px] h-[225px]">
      <img
        src="/images/atlas-framework-logo.png"
        alt="Atlas Framework Logo"
        className="absolute inset-0 w-full h-auto object-contain dark:opacity-0 transition-opacity duration-300"
      />
      <img
        src="/images/atlas-framework-logo-dark.png"
        alt="Atlas Framework Logo"
        className="absolute inset-0 w-full h-auto object-contain opacity-0 dark:opacity-100 transition-opacity duration-300"
      />
    </div>
  )
}

