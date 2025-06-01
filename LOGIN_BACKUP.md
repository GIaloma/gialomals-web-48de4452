# Login Functionality - Temporarily Removed

This file contains the login functionality that was temporarily removed from both English and Spanish navbars.

## English Version Login Code:
```jsx
// Import needed
import { LogIn } from 'lucide-react';

// Desktop Login Button
<div className="hidden md:block">
  <Link to="/login">
    <Button variant="outline" className="border-gialoma-gold text-gialoma-gold hover:bg-gialoma-gold hover:text-white px-3 py-1 h-9">
      <LogIn size={16} className="mr-1" /> Login
    </Button>
  </Link>
</div>

// Mobile Login Button
<Link 
  to="/login" 
  onClick={() => setIsMenuOpen(false)}
>
  <Button variant="outline" className="border-gialoma-gold text-gialoma-gold hover:bg-gialoma-gold hover:text-white w-full flex items-center justify-center">
    <LogIn size={18} className="mr-2" /> Login
  </Button>
</Link>
```

## Spanish Version Login Code:
```jsx
// Import needed
import { LogIn } from 'lucide-react';

// Desktop Login Button
<div className="hidden md:block">
  <Link to="/login">
    <Button variant="outline" className="border-gialoma-gold text-gialoma-gold hover:bg-gialoma-gold hover:text-white px-3 py-1 h-9">
      <LogIn size={16} className="mr-1" /> Iniciar Sesión
    </Button>
  </Link>
</div>

// Mobile Login Button
<Link 
  to="/login" 
  onClick={() => setIsMenuOpen(false)}
>
  <Button variant="outline" className="border-gialoma-gold text-gialoma-gold hover:bg-gialoma-gold hover:text-white w-full flex items-center justify-center">
    <LogIn size={18} className="mr-2" /> Iniciar Sesión
  </Button>
</Link>
```

## Instructions to Restore:
1. Add `LogIn` import from 'lucide-react' in both navbar files
2. Uncomment the login button sections in both desktop and mobile menus
3. Ensure the `/login` route exists in your routing configuration

---

*Removed on: June 1, 2025*
*Files affected: Navbar.tsx, Navbar-es.tsx*
