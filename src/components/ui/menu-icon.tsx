import Image from "@/components/ui/image";
import { useIsMounted } from "@/lib/hooks/use-is-mounted";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Logo: React.FC<React.SVGAttributes<{}>> = (props) => {
    const isMounted = useIsMounted();

    return (
        <div className="flex cursor-pointer outline-none" {...props}>
            <span className="relative flex overflow-hidden">{isMounted && <Bars3Icon className="w-10 h-10" />}</span>
        </div>
    );
};

export default Logo;
