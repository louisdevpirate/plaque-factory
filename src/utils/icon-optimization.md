# Icon Library Optimization Guide

## Current Issues:
- Using 3 icon libraries: react-icons (83MB), lucide-react (36MB), @heroicons/react (21MB)
- Total icon libraries size: ~140MB in node_modules
- This affects bundle size even with tree-shaking

## Recommended Solution:

### Option 1: Use only Lucide React (Recommended)
Lucide is lightweight and has all common icons. Remove react-icons and @heroicons/react.

### Option 2: Create custom icon components
Extract only the SVGs you need and create lightweight components.

### Option 3: Use dynamic imports for icons
```tsx
const IconComponent = dynamic(() => 
  import('react-icons/fa').then(mod => mod.FaArrowRight)
)
```

## Implementation Steps:
1. Audit all icon usage in the codebase
2. Standardize on one library (preferably Lucide)
3. Remove unused icon libraries
4. Consider using SVG sprites for frequently used icons