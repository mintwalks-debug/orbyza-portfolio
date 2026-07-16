import { useInViewAnimation } from '../hooks/useInViewAnimation';
import { Button } from './Button';

export function PricingSection() {
  const { ref, isInView } = useInViewAnimation();

  return (
    <section ref={ref as React.RefObject<HTMLElement>} className="w-full py-12 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:max-w-4xl mx-auto md:ml-auto md:justify-end">
        
        {/* Card 1 */}
        <div 
          className={`bg-[#051A24] rounded-[40px] pl-10 pr-10 md:pr-24 pt-10 pb-10 shadow-inner flex flex-col justify-between ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }}
        >
          <div>
            <h3 className="text-[#F6FCFF] text-[22px] font-medium mb-4">Monthly Partnership</h3>
            <p className="text-[#E0EBF0] mb-12">
              A dedicated creative design team.<br/>
              You work directly with Viktor.
            </p>
          </div>
          <div>
            <div className="mb-8">
              <span className="text-2xl text-[#F6FCFF] font-medium block">$5,000</span>
              <span className="text-[#E0EBF0] text-sm">Monthly</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="https://halaskastudio.com/book" variant="primary">Start a chat</Button>
              <Button href="https://halaskastudio.com/book" variant="secondary" className="bg-white/10 text-white hover:bg-white/20 border-none shadow-none">How it works</Button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div 
          className={`bg-white rounded-[40px] pl-10 pr-10 md:pr-24 pt-10 pb-10 shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex flex-col justify-between ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          <div>
            <h3 className="text-[#0D212C] text-[22px] font-medium mb-4">Custom Project</h3>
            <p className="text-[#0D212C]/70 mb-12">
              Fixed scope, fixed timeline.<br/>
              Same team, same standards.
            </p>
          </div>
          <div>
            <div className="mb-8">
              <span className="text-2xl text-[#0D212C] font-medium block">$5,000</span>
              <span className="text-[#0D212C]/70 text-sm">Minimum</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="https://halaskastudio.com/book" variant="tertiary">Start a chat</Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
