class SectionManager {
  static sortByOrdinal(a, b) {
    return a.attributes.ordinal > b.attributes.ordinal ? 1 : -1;
  }

  constructor() {
    this.sectionLoader = require.context('!json-loader!front-matter-loader!../../../../public/projects/ccls/sections/', true, /.md$/);
  }

  sections() {
    return this.sectionLoader.keys().map((fileName) => {
      const section = this.sectionLoader(fileName);
      return section;
    });
  }
}

export default SectionManager;
