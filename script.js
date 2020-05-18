function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const { Component, PropTypes } = React;



class List extends Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      items: [
      { id: 'item_1001',
        name: 'ОЧКИ ЗАЩИТНЫЕ',
        src: 'https://militarist.ua/upload/tmp/resize_420_420/3dc03d919158c63f0cc149c76a3d8c1f.png',
        cost: 490,
        qty: 0 },

      { id: 'item_1002',
        name: 'ПЕРЧАТКИ   БЕСПАЛЫЕ',
        src: "https://militarist.ua/upload/tmp/resize_420_420/3cdf6ec64a27a484080d4e99f48e0506.jpg",
        cost: 446,
        qty: 0 },

      { id: 'item_1003',
        name: 'ФУТБОЛКА_ ПОТООТВОДЯЩАЯ',
        src: "https://militarist.ua/upload/resize_cache/iblock/887/420_420_16a9cdfeb475445909b854c588a1af844/887bc5ed8d542af8e2e7f565f6ea8592.jpg",
        cost: 248,
        qty: 0 },

      { id: 'item_1004',
        name: 'БОТИНКИ   ПОЛЕВЫЕ',
        src: "https://militarist.ua/upload/resize_cache/iblock/b15/420_420_16a9cdfeb475445909b854c588a1af844/b15f6638e71a74e56c583bb0c02fd60f.jpg",
        cost: 1386,
        qty: 0 },

      { id: 'item_1005',
        name: 'ШАРФ- ТРУБА',
        src: 'https://militarist.ua/upload/resize_cache/iblock/814/420_420_16a9cdfeb475445909b854c588a1af844/814a7f1f0aa79a5ab27183206a5e4a31.jpg',
        cost: 99,
        qty: 0 },

      { id: 'item_1006',
        name: 'БАЛАКЛАВА  -НИНДЗЯ',
        src: 'https://militarist.ua/upload/resize_cache/iblock/3a4/420_420_16a9cdfeb475445909b854c588a1af844/3a42cbbd3269ae1795cd6fdbe8f3c7f8.jpg',
        cost: 119,
        qty: 0 },

      {
        id: 'item_1007',
        name: 'M-TAC АНОРАК  ',
        src: 'https://militarist.ua/upload/resize_cache/iblock/1b1/420_420_16a9cdfeb475445909b854c588a1af844/1b15a6b707e5025a26a1b5decf7d391f.jpg',
        cost: 990,
        qty: 0 },

      {
        id: 'item_1008',
        name: 'M-TAC АНОРАК     ',
        src: 'https://militarist.ua/upload/resize_cache/iblock/cea/420_420_16a9cdfeb475445909b854c588a1af844/ceaa3d3e4c904f75f2cdf8278fd14b73.jpg',
        cost: 825,
        qty: 0 },

      { id: 'item_1009',
        name: 'M-TAC ТУФЛИ ЗСУ   ',
        src: 'https://militarist.ua/upload/resize_cache/iblock/91b/420_420_16a9cdfeb475445909b854c588a1af844/91bd39be1cd79c7be3171168cb6e9f5b.jpg',
        cost: 660,
        qty: 0 },

      { id: 'item_1010',
        name: 'M-TAC БРЮКИ     ',
        src: 'https://militarist.ua/upload/resize_cache/iblock/c90/420_420_16a9cdfeb475445909b854c588a1af844/c90b1305477455b319e6ff33417c252d.jpg',
        cost: 1860,
        qty: 0 },

      {
        id: 'item_1011',
        name: 'M-TAC ШОРТЫ  ',
        src: 'https://militarist.ua/upload/resize_cache/iblock/b2b/420_420_16a9cdfeb475445909b854c588a1af844/b2b0d4c8ee4990fbc5ac0108962f91ee.jpg',
        cost: 1005,
        qty: 0 },

      {
        id: 'item_1012',
        name: 'M-TAC ШАПКА    ',
        src: 'https://militarist.ua/upload/resize_cache/iblock/e7b/420_420_16a9cdfeb475445909b854c588a1af844/e7b283dc8593dabb034d3b5db48a8023.jpg',
        cost: 96,
        qty: 0 },

      { id: 'item_1013',
        name: 'ОЧКИ ЗАЩИТНЫЕ    ',
        src: 'https://militarist.ua/upload/tmp/resize_420_420/3dc03d919158c63f0cc149c76a3d8c1f.png',
        cost: 490,
        qty: 0 },

      { id: 'item_1014',
        name: 'ПЕРЧАТКИ БЕСПАЛЫЕ     ',
        src: "https://militarist.ua/upload/tmp/resize_420_420/3cdf6ec64a27a484080d4e99f48e0506.jpg",
        cost: 446,
        qty: 0 },

      { id: 'item_1015',
        name: 'ФУТБОЛКА    ПОТООТВОДЯЩАЯ   ',
        src: "https://militarist.ua/upload/resize_cache/iblock/887/420_420_16a9cdfeb475445909b854c588a1af844/887bc5ed8d542af8e2e7f565f6ea8592.jpg",
        cost: 248,
        qty: 0 },

      { id: 'item_1016',
        name: 'ШАРФ - ТРУБА   ',
        src: 'https://militarist.ua/upload/resize_cache/iblock/814/420_420_16a9cdfeb475445909b854c588a1af844/814a7f1f0aa79a5ab27183206a5e4a31.jpg',
        cost: 99,
        qty: 0 },

      { id: 'item_1017',
        name: '_ШАРФ- ТРУБА',
        src: 'https://militarist.ua/upload/resize_cache/iblock/814/420_420_16a9cdfeb475445909b854c588a1af844/814a7f1f0aa79a5ab27183206a5e4a31.jpg',
        cost: 99,
        qty: 0 },

      { id: 'item_1018',
        name: 'ШАРФ -ТРУБА',
        src: 'https://militarist.ua/upload/resize_cache/iblock/814/420_420_16a9cdfeb475445909b854c588a1af844/814a7f1f0aa79a5ab27183206a5e4a31.jpg',
        cost: 99,
        qty: 0 },

      { id: 'item_1019',
        name: ' ШАРФ -ТРУБА ',
        src: 'https://militarist.ua/upload/resize_cache/iblock/814/420_420_16a9cdfeb475445909b854c588a1af844/814a7f1f0aa79a5ab27183206a5e4a31.jpg',
        cost: 99,
        qty: 0 },

      { id: 'item_1020',
        name: ' ШАРФ - ТРУБА',
        src: 'https://militarist.ua/upload/resize_cache/iblock/814/420_420_16a9cdfeb475445909b854c588a1af844/814a7f1f0aa79a5ab27183206a5e4a31.jpg',
        cost: 99,
        qty: 0 },

      { id: 'item_1021',
        name: ' ШАРФ  - ТРУБА',
        src: 'https://militarist.ua/upload/resize_cache/iblock/814/420_420_16a9cdfeb475445909b854c588a1af844/814a7f1f0aa79a5ab27183206a5e4a31.jpg',
        cost: 99,
        qty: 0 },

      { id: 'item_1022',
        name: '  ШАРФ-ТРУБА',
        src: 'https://militarist.ua/upload/resize_cache/iblock/814/420_420_16a9cdfeb475445909b854c588a1af844/814a7f1f0aa79a5ab27183206a5e4a31.jpg',
        cost: 99,
        qty: 0 },

      { id: 'item_1023',
        name: '   M-TAC ШОРТЫ',
        src: 'https://militarist.ua/upload/resize_cache/iblock/b2b/420_420_16a9cdfeb475445909b854c588a1af844/b2b0d4c8ee4990fbc5ac0108962f91ee.jpg',
        cost: 1005,
        qty: 0 },

      { id: 'item_1024',
        name: ' M-TAC ШОРТЫ ',
        src: 'https://militarist.ua/upload/resize_cache/iblock/b2b/420_420_16a9cdfeb475445909b854c588a1af844/b2b0d4c8ee4990fbc5ac0108962f91ee.jpg',
        cost: 1005,
        qty: 0 },

      { id: 'item_1025',
        name: ' M-TAC ШОРТЫ  ',
        src: 'https://militarist.ua/upload/resize_cache/iblock/b2b/420_420_16a9cdfeb475445909b854c588a1af844/b2b0d4c8ee4990fbc5ac0108962f91ee.jpg',
        cost: 1005,
        qty: 0 },

      { id: 'item_1026',
        name: 'M -TAC  ШОРТЫ     ',
        src: 'https://militarist.ua/upload/resize_cache/iblock/b2b/420_420_16a9cdfeb475445909b854c588a1af844/b2b0d4c8ee4990fbc5ac0108962f91ee.jpg',
        cost: 1005,
        qty: 0 },

      { id: 'item_1027',
        name: 'M- TAC  ШОРТЫ ',
        src: 'https://militarist.ua/upload/resize_cache/iblock/b2b/420_420_16a9cdfeb475445909b854c588a1af844/b2b0d4c8ee4990fbc5ac0108962f91ee.jpg',
        cost: 1005,
        qty: 0 },

      { id: 'item_1028',
        name: 'ФУТБОЛКА  -    ПОТООТВОДЯЩАЯ',
        src: "https://militarist.ua/upload/resize_cache/iblock/887/420_420_16a9cdfeb475445909b854c588a1af844/887bc5ed8d542af8e2e7f565f6ea8592.jpg",
        cost: 248,
        qty: 0 },

      { id: 'item_1029',
        name: 'ФУТБОЛКА  --  ПОТООТВОДЯЩАЯ',
        src: "https://militarist.ua/upload/resize_cache/iblock/887/420_420_16a9cdfeb475445909b854c588a1af844/887bc5ed8d542af8e2e7f565f6ea8592.jpg",
        cost: 248,
        qty: 0 },

      { id: 'item_1030',
        name: 'ФУТБОЛКА -ПОТООТВОДЯЩАЯ          ',
        src: "https://militarist.ua/upload/resize_cache/iblock/887/420_420_16a9cdfeb475445909b854c588a1af844/887bc5ed8d542af8e2e7f565f6ea8592.jpg",
        cost: 248,
        qty: 0 },

      { id: 'item_1031',
        name: 'ФУТБОЛКА _ПОТООТВОДЯЩАЯ         ',
        src: "https://militarist.ua/upload/resize_cache/iblock/887/420_420_16a9cdfeb475445909b854c588a1af844/887bc5ed8d542af8e2e7f565f6ea8592.jpg",
        cost: 248,
        qty: 0 },

      { id: 'item_1032',
        name: 'ФУТБОЛКА ПОТООТВОДЯЩАЯ         ',
        src: "https://militarist.ua/upload/resize_cache/iblock/887/420_420_16a9cdfeb475445909b854c588a1af844/887bc5ed8d542af8e2e7f565f6ea8592.jpg",
        cost: 248,
        qty: 0 },

      { id: 'item_1033',
        name: 'ФУТБОЛКА ПОТООТВОДЯЩАЯ        ',
        src: "https://militarist.ua/upload/resize_cache/iblock/887/420_420_16a9cdfeb475445909b854c588a1af844/887bc5ed8d542af8e2e7f565f6ea8592.jpg",
        cost: 248,
        qty: 0 },

      { id: 'item_1034',
        name: 'ФУТБОЛКА ПОТООТВОДЯЩАЯ       ',
        src: "https://militarist.ua/upload/resize_cache/iblock/887/420_420_16a9cdfeb475445909b854c588a1af844/887bc5ed8d542af8e2e7f565f6ea8592.jpg",
        cost: 248,
        qty: 0 },

      { id: 'item_1035',
        name: 'ФУТБОЛКА ПОТООТВОДЯЩАЯ      ',
        src: "https://militarist.ua/upload/resize_cache/iblock/887/420_420_16a9cdfeb475445909b854c588a1af844/887bc5ed8d542af8e2e7f565f6ea8592.jpg",
        cost: 248,
        qty: 0 },

      { id: 'item_1036',
        name: 'ФУТБОЛКА ПОТООТВОДЯЩАЯ     ',
        src: "https://militarist.ua/upload/resize_cache/iblock/887/420_420_16a9cdfeb475445909b854c588a1af844/887bc5ed8d542af8e2e7f565f6ea8592.jpg",
        cost: 248,
        qty: 0 },

      { id: 'item_1037',
        name: 'ФУТБОЛКА   ПОТООТВОДЯЩАЯ',
        src: "https://militarist.ua/upload/resize_cache/iblock/887/420_420_16a9cdfeb475445909b854c588a1af844/887bc5ed8d542af8e2e7f565f6ea8592.jpg",
        cost: 248,
        qty: 0 },

      { id: 'item_1038',
        name: 'ФУТБОЛКА ПОТООТВОДЯЩАЯ    ',
        src: "https://militarist.ua/upload/resize_cache/iblock/887/420_420_16a9cdfeb475445909b854c588a1af844/887bc5ed8d542af8e2e7f565f6ea8592.jpg",
        cost: 248,
        qty: 0 },

      { id: 'item_1039',
        name: 'ФУТБОЛКА ПОТООТВОДЯЩАЯ   ',
        src: "https://militarist.ua/upload/resize_cache/iblock/887/420_420_16a9cdfeb475445909b854c588a1af844/887bc5ed8d542af8e2e7f565f6ea8592.jpg",
        cost: 248,
        qty: 0 },

      { id: 'item_1040',
        name: 'ФУТБОЛКА ПОТООТВОДЯЩАЯ ',
        src: "https://militarist.ua/upload/resize_cache/iblock/887/420_420_16a9cdfeb475445909b854c588a1af844/887bc5ed8d542af8e2e7f565f6ea8592.jpg",
        cost: 248,
        qty: 0 },

      { id: 'item_1041',
        name: 'ФУТБОЛКА ПОТООТВОДЯЩАЯ  ',
        src: "https://militarist.ua/upload/resize_cache/iblock/887/420_420_16a9cdfeb475445909b854c588a1af844/887bc5ed8d542af8e2e7f565f6ea8592.jpg",
        cost: 248,
        qty: 0 },

      { id: 'item_1042',
        name: 'ФУТБОЛКА    _ПОТООТВОДЯЩАЯ         ',
        src: "https://militarist.ua/upload/resize_cache/iblock/887/420_420_16a9cdfeb475445909b854c588a1af844/887bc5ed8d542af8e2e7f565f6ea8592.jpg",
        cost: 248,
        qty: 0 },

      { id: 'item_1043',
        name: '  _ ФУТБОЛКА _ПОТООТВОДЯЩАЯ         ',
        src: "https://militarist.ua/upload/resize_cache/iblock/887/420_420_16a9cdfeb475445909b854c588a1af844/887bc5ed8d542af8e2e7f565f6ea8592.jpg",
        cost: 248,
        qty: 0 },

      { id: 'item_1044',
       name: '   ФУТБОЛКА _ПОТООТВОДЯЩАЯ         ',
        src: "https://militarist.ua/upload/resize_cache/iblock/887/420_420_16a9cdfeb475445909b854c588a1af844/887bc5ed8d542af8e2e7f565f6ea8592.jpg",
        cost: 248,
        qty: 0 },

      { id: 'item_1045',
        name: '         ФУТБОЛКА _ПОТООТВОДЯЩАЯ         ',
        src: "https://militarist.ua/upload/resize_cache/iblock/887/420_420_16a9cdfeb475445909b854c588a1af844/887bc5ed8d542af8e2e7f565f6ea8592.jpg",
        cost: 248,
        qty: 0 },

      { id: 'item_1046',
       name: '   ФУТБОЛКА _   ПОТООТВОДЯЩАЯ          ',
        src: "https://militarist.ua/upload/resize_cache/iblock/887/420_420_16a9cdfeb475445909b854c588a1af844/887bc5ed8d542af8e2e7f565f6ea8592.jpg",
        cost: 248,
        qty: 0 },

      { id: 'item_1047',
        name: '           ФУТБОЛКА _ПОТООТВОДЯЩАЯ         ',
        src: "https://militarist.ua/upload/resize_cache/iblock/887/420_420_16a9cdfeb475445909b854c588a1af844/887bc5ed8d542af8e2e7f565f6ea8592.jpg",
        cost: 248,
        qty: 0 },

      { id: 'item_1065',
        name: '__ФУТБОЛКА _               ПОТООТВОДЯЩАЯ         ',
        src: "https://militarist.ua/upload/resize_cache/iblock/887/420_420_16a9cdfeb475445909b854c588a1af844/887bc5ed8d542af8e2e7f565f6ea8592.jpg",
        cost: 248,
        qty: 0 }],


      total_items: 0,
      total: 0,
      packaging: 1.99,
      popup: false,
      thank_popup: false });_defineProperty(this, "add",

    (name, cost) => {

      this.state.items.map((item, id) => {
        if (item.name == name) {
          item.qty += 1;
        }


      });
      this.setState({
        total_items: this.state.total_items + 1,
        total: this.state.total + cost });


    });_defineProperty(this, "remove",
    (name, cost) => {
      this.state.items.map((item, id) => {
        if (item.name == name) {
          if (item.qty != 0) {
            item.qty -= 1;
            this.setState({
              total_items: this.state.total_items - 1,
              total: this.state.total - cost });

          }
        }


      });
    });_defineProperty(this, "popup",
    () => {
      this.setState({
        popup: !this.state.popup });

    });_defineProperty(this, "thank_popup",
    () => {
      this.setState({
        thank_popup: !this.state.thank_popup });

    });_defineProperty(this, "reload",
    () => {
      window.location.href = window.location.href;
    });}
  render() {
    return (
      React.createElement("div", null,
      React.createElement("div", { className: "navbar"},
      React.createElement("span", { className: "logo" },
      React.createElement("img", { src: "https://opticstrade.com/files/catalog3/belomo/pricel_opticheskij_posp_3_9h42_u/pricel_opticheskij_posp_3_9h42_u.jpg", alt: "logo" }),
      React.createElement("h1", null, "ВОЕНТОРГ"),
	  React.createElement("br", null, null),
	  React.createElement("span", { className: "contacts"}, "+38 (098) 01-00-010",)),
	  
      React.createElement("button", { className: "popup_btn" }, React.createElement("img", { src: "https://i.ibb.co/BcSC34f/cart.png" }),
      this.state.total_items != 0 ? React.createElement("span", null, this.state.total_items) : null)),

      React.createElement("div", { className: "list-container" },
      this.state.items.map((item, id) => {
        return React.createElement("div", { className: "item-container", key: id },

        React.createElement("img", { src: item.src, alt: item.name, className: "img" }),
        React.createElement("h3", null, item.name),

        React.createElement("b", null, "грн.", item.cost.toFixed(2)),
        React.createElement("button", { onClick: () => this.add(item.name, item.cost) }, "Add to Cart"),
        React.createElement("button", { onClick: () => this.remove(item.name, item.cost) }, "Remove"));

      })),

      React.createElement("div", { className: "sidecart" },

      this.state.total_items != 0 ? React.createElement("div", { className: "popup" },
      React.createElement("div", { className: "cart" },
      React.createElement("h2", null, "Your Cart"),
      this.state.items.map((item1, id1) => {

        return (
          React.createElement("div", { key: id1 },
          item1.qty != 0 ?
          React.createElement("div", { key: id1, className: "cart_item" },
          React.createElement("span", null, React.createElement("h3", null, item1.name, " (", item1.qty, ")"), React.createElement("h3", null, "грн.", (item1.cost * item1.qty).toFixed(2)))) :
          null));



      })),

      React.createElement("div", null,
      React.createElement("div", { className: "final_price" },
      React.createElement("div", { className: "cart_item" },
      React.createElement("h3", null, "Общая цена:"),
      React.createElement("h3", null, "грн.", this.state.total.toFixed(2))),

      /*React.createElement("div", { className: "cart_item" },
      React.createElement("h3", null, "Shipping Charges:"),
      React.createElement("h3", null, "Free")),*/

      React.createElement("div",
      React.createElement("h3", null, "", this.state.packaging.toFixed(null)))),


      /*React.createElement("div", { className: "final_price" },
      React.createElement("h3", null, "Total Price:"),
      React.createElement("h3", null, "грн.", (this.state.total + this.state.packaging).toFixed(2))),*/
	  
	  //закоментировал кнопку корзины и все что было после нажатия на нее теперь не работает
      /*React.createElement("button", { className: "order_btn", onClick: () => this.popup() }, "order now")*/)) :

      React.createElement("div", { className: "popup" }, React.createElement("b", null, "You cart looks empty..."))),

      React.createElement("div", { className: "orderpage" },


      this.state.popup ?
      this.state.total_items != 0 ? React.createElement("div", { className: "order" },
      React.createElement("div", { className: "cart" },
      React.createElement("h1", null, "Your Cart"),
      React.createElement("div", { className: "cart_left" },
      this.state.items.map((item1, id1) => {

        return (
          React.createElement("div", { key: id1 },
          item1.qty != 0 ?
          React.createElement("div", { key: id1, className: "cart_item" },
          React.createElement("img", { src: item1.src }),
          React.createElement("span", { className: "cart_info" },
          React.createElement("h3", null, item1.name, " x ", item1.qty),
          React.createElement("h3", null, "Cost : $", item1.cost),
          React.createElement("h3", null, "Total Cost : $", (item1.cost * item1.qty).toFixed(2)))) :

          null));



      }))),


      React.createElement("div", { className: "cart_right" },
      React.createElement("div", { className: "final_price" },
      React.createElement("div", { className: "cart_item" },
      React.createElement("h3", null, "Items Price:"),
      React.createElement("h3", null, "$", this.state.total.toFixed(2))),

      React.createElement("div", { className: "cart_item" },
      React.createElement("h3", null, "Delivery Charges:"),
      React.createElement("h3", null, "Free")),

      React.createElement("div", { className: "cart_item" },
      React.createElement("h3", null, "Packaging:"),
      React.createElement("h3", null, "$", this.state.packaging.toFixed(2)))),


      React.createElement("div", { className: "final_price" },
      React.createElement("h3", null, "Total Price:"),
      React.createElement("h3", null, "$", (this.state.total + this.state.packaging).toFixed(2))),


      React.createElement("button", { className: "order_btn", onClick: () => this.thank_popup() }, "order now"))) :

      null : null,


      this.state.thank_popup ? React.createElement("div", { className: "thank_you" },
      React.createElement("h1", null, "thank you"),
      React.createElement("p", null, "We will deliver your package at your doorstep shortly."),
      React.createElement("button", { className: "order_btn", onClick: () => this.reload() }, "Go Back to Shopping")) :
      null)));





  }}



ReactDOM.render(React.createElement(List, null), document.getElementById('root'));