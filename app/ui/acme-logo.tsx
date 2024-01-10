import { lusitana } from '@/app/ui/fonts';
import { PrinterIcon } from '@heroicons/react/24/outline';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <PrinterIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[20px]">Serviços Gráficos</p>
    </div>
  );
}
