export const Zoos = () => {
  return (
    <div className="page-zoos">
      <section className="cameras-container">
        <div id="cameras" className="cameras">
          <div className="double_arrow" id="double_arrow">
            <img src="/assets/icons/double_arrow.svg" alt="double_arrow" />
          </div>
          <div id="cameras-pet-list" className="cameras-pet-list"></div>
        </div>
      </section>

      <main className="main">
        <div className="container">
          <div className="title-container">
            <h1 className="title">Live panda cams</h1>
            <button className="btn btn--orange">
              donate now <img src="/assets/icons/arrow.svg" alt="arrow" />
            </button>
          </div>
        </div>
      </main>

      <footer id="footer" className="footer"></footer>
      <script type="module" src="/src/main.tsx"></script>
    </div>
  );
};
