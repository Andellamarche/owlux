import Icon from '../Shared/Icon';

const SubQueryHeader = ({ onClose }) => {
  return (
    <div className="h-14 px-4 flex items-center justify-between border-b border-owlux-border bg-owlux-subquery-bg">
      <div className="flex items-center gap-2">
        <h3 className="text-base font-semibold text-owlux-text">Consultas</h3>
      </div>
      <button
        onClick={onClose}
        className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
        title="Cerrar sub-consulta"
      >
        <Icon name="close" size={18} />
      </button>
    </div>
  );
};

export default SubQueryHeader;
