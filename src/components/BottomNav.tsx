import { Button } from './Button';

export function BottomNav() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-[fadeInUp_0.8s_ease-out_0.5s_forwards] opacity-0">
      <div className="bg-white rounded-full px-2 py-2 flex items-center shadow-[0_1px_2px_rgba(0,0,0,0.05),_0_8px_32px_rgba(0,0,0,0.1),_0_0_0_1px_rgba(0,0,0,0.05)]">
        <div className="font-serif text-2xl font-semibold text-[#051A24] px-6">
          V
        </div>
        <Button href="https://halaskastudio.com/book" variant="primary" className="!py-2.5">
          Start a chat
        </Button>
      </div>
    </div>
  );
}
