
export function AfricanPattern1() {
  return <svg className="w-full h-full text-white/5" width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Geometric star pattern */}
      <path d="M100 20 L120 80 L180 80 L130 120 L150 180 L100 140 L50 180 L70 120 L20 80 L80 80 Z" fill="currentColor" />
      <circle cx="100" cy="100" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="1" />
    </svg>;
}
export function AfricanPattern2() {
  return <svg className="w-full h-full text-white/5" width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tribal diamond pattern */}
      <path d="M75 10 L140 75 L75 140 L10 75 Z" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M75 30 L120 75 L75 120 L30 75 Z" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M75 50 L100 75 L75 100 L50 75 Z" fill="currentColor" />
      <circle cx="75" cy="25" r="3" fill="currentColor" />
      <circle cx="125" cy="75" r="3" fill="currentColor" />
      <circle cx="75" cy="125" r="3" fill="currentColor" />
      <circle cx="25" cy="75" r="3" fill="currentColor" />
    </svg>;
}
export function AfricanPattern3() {
  return <svg className="w-full h-full text-white/5" width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Adinkra-inspired pattern */}
      <circle cx="90" cy="90" r="70" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="90" cy="90" r="50" fill="none" stroke="currentColor" strokeWidth="2" />
      <path d="M90 20 L90 160 M20 90 L160 90" stroke="currentColor" strokeWidth="2" />
      <path d="M40 40 L140 140 M140 40 L40 140" stroke="currentColor" strokeWidth="1" />
      <circle cx="90" cy="90" r="10" fill="currentColor" />
    </svg>;
}
export function AfricanPattern4() {
  return <svg className="w-full h-full text-white/5" width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Zigzag tribal pattern */}
      <path d="M10 30 L30 10 L50 30 L70 10 L90 30 L110 10" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M10 60 L30 40 L50 60 L70 40 L90 60 L110 40" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M10 90 L30 70 L50 90 L70 70 L90 90 L110 70" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M10 120 L30 100 L50 120 L70 100 L90 120 L110 100" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>;
}
export function AfricanPattern5() {
  return <svg className="w-full h-full text-white/5" width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Kente-inspired geometric */}
      <rect x="20" y="20" width="30" height="30" fill="currentColor" />
      <rect x="110" y="20" width="30" height="30" fill="currentColor" />
      <rect x="20" y="110" width="30" height="30" fill="currentColor" />
      <rect x="110" y="110" width="30" height="30" fill="currentColor" />
      <circle cx="80" cy="80" r="40" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M60 60 L100 100 M100 60 L60 100" stroke="currentColor" strokeWidth="2" />
    </svg>;
}
export function AfricanPattern6() {
  return <svg className="w-full h-full text-white/5" width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Sun/flower motif */}
      <circle cx="70" cy="70" r="20" fill="currentColor" />
      {[...Array(12)].map((_, i) => {
      const angle = i * 30 * Math.PI / 180;
      const x1 = 70 + Math.cos(angle) * 25;
      const y1 = 70 + Math.sin(angle) * 25;
      const x2 = 70 + Math.cos(angle) * 60;
      const y2 = 70 + Math.sin(angle) * 60;
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="3" />;
    })}
    </svg>;
}