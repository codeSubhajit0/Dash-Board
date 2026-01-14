const Header = ({toggleSidebar}) => {
  return (
    <div className="w-full h-12 bg-amber-400">
      <button onClick={toggleSidebar} className="mr-4 text-xl font-bold">☰</button>
      Header
    </div>
  );
}

export default Header
