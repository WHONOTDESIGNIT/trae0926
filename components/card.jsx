export function Card({ title, children, className }) {
    return (
        <div className={['rounded-sm', className].filter(Boolean).join(' ')} style={{backgroundColor: '#FFFFFF', color: '#455962'}}>
            <div className="flex flex-col gap-4 px-6 py-8">
                {title && <h3 style={{color: '#263237'}}>{title}</h3>}
                {children}
            </div>
        </div>
    );
}
