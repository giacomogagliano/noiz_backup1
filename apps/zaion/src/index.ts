export {};
interface Product {
  name: string;
  model: string;
  brand: string;
  brand_url: URL;
  url: URL;
  description: string;
  unit_price: number;
  slug: string;
}
class Product {
  constructor(props: Product) {
    this.name = props.name;
    this.description = props.description;
    this.model = props.model;
    this.unit_price = props.unit_price;
    this.url = props.url;
    this.brand_url = props.brand_url;
    this.brand = props.brand;
    this.slug = props.slug;
  }
}

interface BudgetEntity {
  title: string;
  product: Product;
  amount: number;
  scope: string;
}
class BudgetEntity {}

class Budget {
  products: Map<string, Product>;
  budgetEntities: Map<string, BudgetEntity>;
  constructor() {
    this.products = new Map<string, Product>();
    this.budgetEntities = new Map<string, BudgetEntity>();
  }

  getProductList() {
    let res = [];
    for (let product of this.products) {
      res.push(product[0]);
    }
    return res;
  }
  addProduct(key: string, element: Product) {
    this.products.set(key, element);
    return this;
  }
  addBudgetEntity(infos: BudgetEntity) {
    this.budgetEntities.set(infos.title, infos);
    return this;
  }
  totalBudget() {
    return this.calculateSum();
  }
  calculateSum = (arr: number[] = []) => {
    for (let el of this.budgetEntities) {
      const amount = el[1].amount;
      const price = el[1].product.unit_price;
      const subtotal = price * amount;
      arr.push(subtotal);
    }
    return arr.reduce((p, c) => p + c);
  };
}

interface ProductOnSale {
  product: Product;
  budgetEntity: BudgetEntity;
  stock: ProductOnSale["budgetEntity"]["amount"];
  purchase_price: Product["unit_price"];
  sale_price: number;
  markup: number;
  markup_perc: string;
}
class ProductOnSale {
  constructor(props: ProductOnSale) {
    this.product = props.product;
    this.budgetEntity = props.budgetEntity;
    this.purchase_price = props.product.unit_price;
    this.sale_price = props.sale_price;
    this.stock = props.budgetEntity.amount;
    this.markup = this.sale_price - this.purchase_price;
    this.markup_perc = `${Math.round(
      (this.markup / this.purchase_price - 1) * 100
    )}%`;
  }
}

interface Income {
  products: Map<string, ProductOnSale>;
  addProduct(product: ProductOnSale): this;
}
class Income {
  get expense() {
    const cost = this.calculateCosts();
    return cost;
  }
  get gross() {
    const gross = this.calculateEarn();
    return gross;
  }

  get markup() {
    return this.gross - this.expense;
  }

  get markup_perc() {
    const gain = `${Math.round((this.markup / this.expense) * 10000) / 10000}%`;
    return gain;
  }

  constructor() {
    this.products = new Map<string, ProductOnSale>();
  }
  addProduct(p: ProductOnSale) {
    this.products.set(p.product.name, p);
    return this;
  }
  calculateCosts(arr: number[] = []) {
    for (let product of this.products) {
      const costprice = product[1].purchase_price;
      const stock = product[1].stock;
      const cost = costprice * stock;
      arr.push(cost);
    }
    return arr.reduce((p, c) => p + c);
  }
  calculateEarn(arr: number[] = []) {
    for (let product of this.products) {
      const stock = product[1].stock;
      const salePrice = product[1].sale_price;
      const sale = salePrice * stock;
      arr.push(sale);
    }
    return arr.reduce((p, c) => p + c);
  }
}

interface Project {
  name: string;
  budget: Budget;
  income: Income;
}
class Project {
  constructor(props: Project) {
    this.budget = props.budget;
    this.income = props.income;
    this.name = props.name;
  }
}

const rasp = new Product({
  description: "Singleboard Computer",
  model: "model b",
  brand: "Raspberry",
  slug: "rasp",
  brand_url: new URL(
    "https://www.raspberrypi.com/products/raspberry-pi-4-model-b/"
  ),
  name: "Raspberry Pi 4",
  unit_price: 75,
  url: new URL("https://www.digikey.com/"),
});

const raid_system = new Product({
  description: "Raid system",
  model: "not defined",
  slug: "raid-system",
  name: "unknown",
  brand: "unknown",
  brand_url: new URL("https://not/known/"),
  unit_price: 500,
  url: new URL("https://not/known/"),
});

const printing = new Product({
  description: "Material to print self-produced raspberyy covers",
  model: "not defined",
  name: "Raspberry Cover",
  slug: "raspy-cover",
  brand: "unknown",
  brand_url: new URL("https://not/known/"),
  unit_price: 20,
  url: new URL("https://not/known/"),
});

const macstudio = new Product({
  description: "Central station to create the code",
  model: "10Core-GPU24Core-NeuralEngine16-SSD1TB",
  name: "Mac Studio",
  slug: "mac-studio",
  brand: "Apple",
  brand_url: new URL("https://not/known/"),
  unit_price: 2579,
  url: new URL(
    "https://www.apple.com/it/shop/buy-mac/mac-studio/cpu-10-core-gpu-24-core-neural-engine-16-core-32gb-di-memoria-512gb"
  ),
});

const iphone = new Product({
  description: "iPhone Smartphone",
  model: "SE",
  brand: "Apple",
  slug: "iphoneSE",
  brand_url: new URL("https://not/known/"),
  name: "iPhone",
  unit_price: 560,
  url: new URL("https://www.apple.com/it/shop/buy-iphone/iphone-se"),
});

const ipad = new Product({
  description: "tablet",
  model: "SE",
  brand: "Apple",
  slug: "ipadSE",
  brand_url: new URL("https://not/known/"),
  name: "iPhone",
  unit_price: 590,
  url: new URL("https://www.apple.com/it/shop/buy-ipad/ipad"),
});

const android = new Product({
  description: "android Smartphone",
  model: "S21 FE 5G",
  name: "Samsung",
  brand: "Samsung",
  slug: "android",
  brand_url: new URL("https://not/known/"),
  unit_price: 480,
  url: new URL(
    "https://www.amazon.it/Smartphone-Fotocamere-Posteriori-Graphite-Versione/dp/B09M3WJWBR/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=UW98MQIJVBD3&keywords=android+samsung+s21fe&qid=1672849850&sprefix=android+samsung+s21fe%2Caps%2C102&sr=8-1"
  ),
});

const small_android = new Product({
  description: "small android Smartphone",
  model: "Nova 9 SE",
  name: "Huawei",
  slug: "huawei",
  brand: "Huawei",
  brand_url: new URL("https://not/known/"),
  unit_price: 480,
  url: new URL(
    "https://www.amazon.it/HUAWEI-Nova-SE-Smartphone-128GB/dp/B09W2R3M9F/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3GWW658WKLCCD&keywords=android+huawei&qid=1672849786&refinements=p_n_feature_twenty-five_browse-bin%3A51153909031&rnid=51153766031&s=electronics&sprefix=android+huahuei%2Caps%2C93&sr=1-1"
  ),
});

const tab_android = new Product({
  description: "android tablet",
  model: "S6 Lite",
  brand: "Samsung",
  slug: "android-tablet",
  brand_url: new URL("https://not/known/"),
  name: "S6 Lite",
  unit_price: 480,
  url: new URL(
    "https://www.amazon.it/HUAWEI-Nova-SE-Smartphone-128GB/dp/B09W2R3M9F/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3GWW658WKLCCD&keywords=android+huawei&qid=1672849786&refinements=p_n_feature_twenty-five_browse-bin%3A51153909031&rnid=51153766031&s=electronics&sprefix=android+huahuei%2Caps%2C93&sr=1-1"
  ),
});

const widescreen = new Product({
  description: "Flat ultra wide screen",
  model: "SJ55W",
  slug: "screen-flat",
  name: "Samsung Ultra WQHD Monitor",
  unit_price: 320,
  brand: "Samsung",
  brand_url: new URL("https://not/known/"),
  url: new URL(
    "https://www.amazon.it/Samsung-Monitor-SJ55W-S34J552-3440x1440/dp/B08SWH5NQJ/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=monitor&qid=1672849148&refinements=p_89%3ALG%7CSamsung+Monitor%2Cp_n_feature_six_browse-bin%3A27387485031&rnid=27387471031&s=pc&sr=1-1"
  ),
});

const widescreen2 = new Product({
  description: "Curved ultra wide screen",
  model: "LG34GP63A",
  name: "LG Ultragear",
  slug: "screen-curved",
  brand: "LG",
  brand_url: new URL("https://not/known/"),
  unit_price: 430,
  url: new URL(
    "https://www.amazon.it/Samsung-Monitor-SJ55W-S34J552-3440x1440/dp/B08SWH5NQJ/ref=sr_1_1?__mk_it_IT=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=monitor&qid=1672849148&refinements=p_89%3ALG%7CSamsung+Monitor%2Cp_n_feature_six_browse-bin%3A27387485031&rnid=27387471031&s=pc&sr=1-1"
  ),
});

const dev_help = new Product({
  brand: "various",
  brand_url: new URL("https://not/known/"),
  slug: "dev",
  description: "developers with good skills",
  model: "unknown",
  name: "developers",
  unit_price: 8000,
  url: new URL("http://some.com/lost"),
});

const t_shirts = new Product({
  brand: "unknown",
  brand_url: new URL("https://not/known/"),
  slug: "t-shirt",
  description: "merchandise t-shirt with zaion logo",
  model: "none",
  name: "t-shirts",
  unit_price: 5,
  url: new URL("http://not.com/known"),
});

const rasp_test = new BudgetEntity();
rasp_test.product = rasp;
rasp_test.title = "rasp-test";
rasp_test.amount = 20;
rasp_test.scope = "Test the network with some trusted peers.";

const rasp_sale = new BudgetEntity();
rasp_sale.product = rasp;
rasp_sale.title = "rasp-sale";
rasp_sale.amount = 100;
rasp_sale.scope = "Stock to sell.";

const printing_mat = new BudgetEntity();
printing_mat.amount = 30;
printing_mat.title = "printing-material";
printing_mat.product = printing;
printing_mat.scope = "material to print raspberry covers";

const macinfo = new BudgetEntity();
macinfo.amount = 1;
macinfo.product = macstudio;
macinfo.scope = "central station for code production";
macinfo.title = "macstudio";

const iphoneInfo = new BudgetEntity();
iphoneInfo.amount = 1;
iphoneInfo.product = iphone;
iphoneInfo.scope = "test code on mobile devices";
iphoneInfo.title = "iphone";

const ipadInfo = new BudgetEntity();
ipadInfo.amount = 1;
ipadInfo.product = ipad;
ipadInfo.scope = "testing on mac tablets";
ipadInfo.title = "ipad";

const andInfo = new BudgetEntity();
andInfo.amount = 1;
andInfo.product = android;
andInfo.scope = "testing on android phones";
andInfo.title = "android";

const smallandInfo = new BudgetEntity();
smallandInfo.amount = 1;
smallandInfo.product = small_android;
smallandInfo.scope = "test on android small equip";
smallandInfo.title = "small-android";

const andtabInfo = new BudgetEntity();
andtabInfo.amount = 1;
andtabInfo.product = tab_android;
andtabInfo.scope = "test on android tablets";
andtabInfo.title = "android-tablet";

const wide1info = new BudgetEntity();
wide1info.amount = 1;
wide1info.product = widescreen;
wide1info.scope = "monitor for central workstation";
wide1info.title = "flat-widescreen";

const wide2info = new BudgetEntity();
wide2info.amount = 1;
wide2info.product = widescreen2;
wide2info.scope = "monitor for central workstation";
wide2info.title = "curved-widescreen";

const devs = new BudgetEntity();
devs.amount = 1;
devs.product = dev_help;
devs.scope = "budget for external help to speed production.";
devs.title = "devs";

const t_shirtsInfos = new BudgetEntity();
t_shirtsInfos.amount = 1000;
t_shirtsInfos.product = t_shirts;
t_shirtsInfos.scope = "merchandise t-shirts";
t_shirtsInfos.title = "t-shirt";

const budget = new Budget();
budget
  .addProduct("rasp", rasp)
  .addProduct("raid_system", raid_system)
  .addProduct("printing", printing)
  .addProduct("macstudio", macstudio)
  .addProduct("iphone", iphone)
  .addProduct("ipad", ipad)
  .addProduct("andr", android)
  .addProduct("andr2", small_android)
  .addProduct("tab_andr", tab_android)
  .addProduct("wide1", widescreen)
  .addProduct("wide2", widescreen2)
  .addProduct("devs", dev_help)
  .addProduct("t-shirts", t_shirts);

budget
  .addBudgetEntity(rasp_test)
  .addBudgetEntity(rasp_sale)
  .addBudgetEntity(printing_mat)
  .addBudgetEntity(macinfo)
  .addBudgetEntity(iphoneInfo)
  .addBudgetEntity(ipadInfo)
  .addBudgetEntity(andInfo)
  .addBudgetEntity(smallandInfo)
  .addBudgetEntity(andtabInfo)
  .addBudgetEntity(wide1info)
  .addBudgetEntity(wide2info)
  .addBudgetEntity(devs)
  .addBudgetEntity(t_shirtsInfos);

const rasp_on_sale = new ProductOnSale({
  product: rasp,
  budgetEntity: rasp_sale,
  purchase_price: 0,
  sale_price: 200,
  stock: 0,
  markup: 0,
  markup_perc: "",
});

const covers_on_sale = new ProductOnSale({
  product: printing,
  budgetEntity: printing_mat,
  purchase_price: 0,
  sale_price: 50,
  stock: 0,
  markup: 0,
  markup_perc: "",
});

const t_shirts_on_sale = new ProductOnSale({
  product: t_shirts,
  budgetEntity: t_shirtsInfos,
  purchase_price: 0,
  sale_price: 25,
  stock: 0,
  markup: 0,
  markup_perc: "",
});

const income = new Income();
income
  .addProduct(rasp_on_sale)
  .addProduct(covers_on_sale)
  .addProduct(t_shirts_on_sale);

export const project = new Project({ name: "Zaion", budget, income });
