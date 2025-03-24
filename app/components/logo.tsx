import Image from 'next/image';

export default function Logo() {
  return (
    <div className="absolute top-8 left-8 z-20">
      <Image 
        src="/logo.png" 
        alt="SynaplyAI Logo" 
        width={140} 
        height={40}
        className="logo"
      />
    </div>
  );
}