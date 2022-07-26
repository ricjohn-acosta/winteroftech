export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: React.FC<IFooter> = ({ className, ...footerProps }) => {
  return (
    <footer {...footerProps} className={`w-full p-5 bg-slate-100 text-slate-500 ${className}`}>
      <p>bruh</p>
    </footer>
  );
};

export default Footer;
