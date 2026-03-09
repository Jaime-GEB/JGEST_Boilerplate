import ThemeToggle from '../components/main/ThemeSwitch';
const MainLayout = ({ Nav, children, Footer }: { Nav?: React.ReactNode ; children: React.ReactNode; Footer?: React.ReactNode }) => {

  return (
    <main className="h-full w-full flex flex-col">

        <nav>
            {Nav}
            <ThemeToggle />
        </nav>

       <section className="w-full h-full">
            {children}
       </section>

        <footer>
            {Footer}
        </footer>
    </main>
  );
};

export default MainLayout;