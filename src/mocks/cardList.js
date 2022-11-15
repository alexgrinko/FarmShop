import food from '../assets/food.svg';
import garbage from '../assets/garbage.svg';
import eco from '../assets/eco.svg';
import noMeat from '../assets/no-meat.svg';

const cardList = [{
        id: 0,
        name: "Еда намного вкуснее",
        about: "Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники",
        image: food,
        feature: "Фермерские продукты",
        store: false
    },
    {
        id: 1,
        name: "Просроченные продукты",
        about: "Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара",
        image: garbage,
        feature: "Магазинные продукты",
        store: true
    },
    {
        id: 3,
        name: "Натуральные продукты",
        about: "Поставляем местные органические продукты выращенные без пестицидов и химических удобрений.",
        image: eco,
        feature: "Фермерские продукты",
        store: false
    },
    {
        id: 4,
        name: "Некачественное мясо",
        about: "Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов",
        image: noMeat,
        feature: "Магазинные продукты",
        store: true
    }
];

export default cardList;