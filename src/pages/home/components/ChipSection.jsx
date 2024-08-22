import { CheckIcon } from '../../../components/icons';

export const ChipSection = () => {
    return (
        <div className="flex flex-wrap gap-4 justify-center mt-12">
            <div draggable="true" role="button" title="Hover chip"
                className="h-8 px-3 flex gap-2 items-center rounded-full text-light-sky-blue transition-colors duration-200 ease-in-out">
                <CheckIcon />
                <span className="block text-sm font-medium">CLASES PERSONALIZADAS</span>
            </div>
            <div draggable="true" role="button" title="Hover chip"
                className="h-8 px-3 flex gap-2 items-center rounded-full text-light-sky-blue transition-colors duration-200 ease-in-out">
                <CheckIcon />
                <span className="block text-sm font-medium">LECCIONES 100% EN LÍNEA</span>
            </div>
            <div draggable="true" role="button" title="Hover chip"
                className="h-8 px-3 flex gap-2 items-center rounded-full text-light-sky-blue transition-colors duration-200 ease-in-out">
                <CheckIcon />
                <span className="block text-sm font-medium">TUTORES CERTIFICADOS</span>
            </div>
        </div>
    );
};
