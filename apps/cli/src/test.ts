type Tipo = "paragrafo" | "gridArea";

class Base {
  method: (name: string) => string;
  constructor(public tipo: Tipo) {}
}
class Paragrafo extends Base {
  isParagrag: true = true;
  constructor() {
    super("paragrafo");
  }
}
class GridArea extends Base {
  isGridArea: true = true;
  constructor() {
    super("gridArea");
  }
}

class DynamicFactory {
  creaDynamic(tipo: "gridArea"): GridArea;
  creaDynamic(tipo: "paragrafo"): Paragrafo;
  creaDynamic(tipo: Tipo): Paragrafo | GridArea {
    var dynamic: Paragrafo | GridArea;
    switch (tipo) {
      case "paragrafo":
        dynamic = new Paragrafo();
        break;
      case "gridArea":
        dynamic = new GridArea();
        break;
      default:
        dynamic = new GridArea();
        break;
    }
    dynamic.tipo = tipo;
    dynamic.method = function (name: string) {
      return `we are here ${name}`;
    };
    return dynamic;
  }
}

const test2 = new DynamicFactory().creaDynamic("gridArea");
