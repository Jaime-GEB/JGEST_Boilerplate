import ThemeToggle from '../components/main/ThemeSwitch';
const MainLayout = ({ Nav, children, Footer }: { Nav?: React.ReactNode ; children: React.ReactNode; Footer?: React.ReactNode }) => {

  return (
    <main className="h-screen w-full flex flex-col overflow-hidden">

        <nav>
            {Nav}
            <ThemeToggle />
        </nav>

       <section className="w-full flex-1 min-h-0 flex flex-col">
            {children}
       </section>

        <footer>
            {Footer}
        </footer>
    </main>
  );
};

export default MainLayout;