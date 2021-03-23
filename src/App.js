function App() {
  return (
    <>
    <div className="faux-bg"></div>
        <header>
            <div>Header stuff</div>
        </header>
        <main>
            <h1>H1 - The quick red fox jumped over the lazy brown dog.</h1>
            <h2>H2 - The quick red fox jumped over the lazy brown dog.</h2>
            <h3>H3 - The quick red fox jumped over the lazy brown dog.</h3>
            <h4>H4 - The quick red fox jumped over the lazy brown dog.</h4>
            <h5>H5 - The quick red fox jumped over the lazy brown dog.</h5>
            <h6>H6 - The quick red fox jumped over the lazy brown dog.</h6>
            <p>The tree has existed for millennia. It existed before the People rose from the mud to walk the land. It existed before birds
            nested in its boughs and beasts found comfort within its shade. it is possible the tree existed before time, growing
            the world from its roots as the universe was created.
            </p>
        </main>
        <footer>
            Other things can go in the footer.
            <div id="footer-copyright">
                &copy; {new Date().getFullYear()} Quincy Alastair Cooke. All Rights Reserved.
            </div>
        </footer>
    </>
  );
}

export default App;
