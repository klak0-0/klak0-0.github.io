let markNote = ['Dell', 'HP', 'Accer', 'Asus', 'Lenovo', 'Apple',]

let NoteApp = {
    data() {
        return {
            hover: false,
            hoverNumber: -1,
            nameArr: ['Браслети', 'Каблучки', 'Кольє', 'Кулони', 'Жетони', 'Сережки', 'Пусети',],
            notebookArr: [
                {
                    name: 'Сережки',
                    price: '100',
                    image: '1.JPG',
                },
                {
                    name: 'Сережки',
                    price: '140',
                    image: '2.jpg',
                },
                {
                    name: 'Сережки',
                    price: '170',
                    image: '3.jpg',
                },
                {
                    name: 'Сережки',
                    price: '130',
                    image: '4.jpg',
                },
                {
                    name: 'Сережки',
                    price: '200',
                    image: '5.jpg',
                },
                {
                    name: 'Сережки',
                    price: '110',
                    image: '6.jpg',
                },
                {
                    name: 'Сережки',
                    price: '190',
                    image: '7.jpg',
                },
                {
                    name: 'Каблучки',
                    price: '220',
                    image: '8.jpg',
                },
                {
                    name: 'Каблучки',
                    price: '340',
                    image: '9.jpg',
                },
                {
                    name: 'Каблучки',
                    price: '270',
                    image: '10.jpeg',
                },
                {
                    name: 'Каблучки',
                    price: '190',
                    image: '11.jpeg',
                },
                {
                    name: 'Каблучки',
                    price: '220',
                    image: '52.jpg',
                },
                {
                    name: 'Каблучки',
                    price: '160',
                    image: '53.jpg',
                },
                {
                    name: 'Каблучки',
                    price: '200',
                    image: '54.jpg',
                },
                {
                    name: 'Каблучки',
                    price: '180',
                    image: '55.jpeg',
                },
                {
                    name: 'Каблучки',
                    price: '270',
                    image: '56.jpg',
                },
                {
                    name: 'Каблучки',
                    price: '170',
                    image: '12.jpeg',
                },
                {
                    name: 'Каблучки',
                    price: '300',
                    image: '13.jpeg',
                },
                {
                    name: 'Кулони',
                    price: '380',
                    image: '14.jpg',
                },
                {
                    name: 'Кулони',
                    price: '400',
                    image: '15.jpg',
                },
                {
                    name: 'Кулони',
                    price: '270',
                    image: '16.jpg',
                },
                {
                    name: 'Кулони',
                    price: '350',
                    image: '17.jpg',
                },
                {
                    name: 'Кулони',
                    price: '290',
                    image: '18.jpg',
                },
                {
                    name: 'Кулони',
                    price: '230',
                    image: '19.jpg',
                },
                {
                    name: 'Кулони',
                    price: '210',
                    image: '51.jpg',
                },
                {
                    name: 'Кулони',
                    price: '310',
                    image: '21.jpg',
                },
                {
                    name: 'Кулони',
                    price: '170',
                    image: '34.jpg',
                },
                {
                    name: 'Жетони',
                    price: '190',
                    image: '20.jpg',
                },
                {
                    name: 'Жетони',
                    price: '150',
                    image: '22.jpg',
                },
                {
                    name: 'Жетони',
                    price: '170',
                    image: '50.jpg',
                },
                {
                    name: 'Жетони',
                    price: '170',
                    image: '24.jpg',
                },
                {
                    name: 'Жетони',
                    price: '130',
                    image: '25.jpg',
                },
                {
                    name: 'Жетони',
                    price: '120',
                    image: '26.jpg',
                },
                {
                    name: 'Жетони',
                    price: '99',
                    image: '27.jpg',
                },
                {
                    name: 'Кольє',
                    price: '250',
                    image: '28.jpg',
                },
                {
                    name: 'Кольє',
                    price: '230',
                    image: '29.jpg',
                },
                {
                    name: 'Кольє',
                    price: '260',
                    image: '30.jpg',
                },
                {
                    name: 'Кольє',
                    price: '180',
                    image: '31.jpg',
                },
                {
                    name: 'Кольє',
                    price: '200',
                    image: '32.jpg',
                },
                {
                    name: 'Кольє',
                    price: '185',
                    image: '33.jpg',
                },
                {
                    name: 'Кольє',
                    price: '200',
                    image: '48.jpg',
                },
                {
                    name: 'Кольє',
                    price: '140',
                    image: '49.jpg',
                },
                {
                    name: 'Браслети',
                    price: '110',
                    image: '35.JPG',
                },
                {
                    name: 'Браслети',
                    price: '120',
                    image: '36.JPG',
                },
                {
                    name: 'Браслети',
                    price: '110',
                    image: '37.JPG',
                }, 
                {
                    name: 'Браслети',
                    price: '100',
                    image: '38.JPG',
                },
                {
                    name: 'Браслети',
                    price: '120',
                    image: '39.jpg',
                },
                {
                    name: 'Браслети',
                    price: '170',
                    image: '40.jpeg',
                },
                {
                    name: 'Пусети',
                    price: '200',
                    image: '41.jpg',
                },
                {
                    name: 'Пусети',
                    price: '180',
                    image: '42.jpg',
                },
                {
                    name: 'Пусети',
                    price: '230',
                    image: '43.jpg',
                },
                {
                    name: 'Пусети',
                    price: '250',
                    image: '44.jpeg',
                },
                {
                    name: 'Пусети',
                    price: '140',
                    image: '45.jpeg',
                },
                {
                    name: 'Пусети',
                    price: '140',
                    image: '46.jpeg',
                },
                {
                    name: 'Пусети',
                    price: '250',
                    image: '47.jpg',
                },


            ],
            chooseName: markNote[0],
            chooseIndex: 0,
            chooseNotebooks: [],
            search: "",
            number: 0,
        }
    },
    methods: {
        showNotebook(index) {
            this.chooseNotebooks.length = 0;
            this.number = index;
            this.chooseName = this.nameArr[index];
            for (elem of this.notebookArr) {
                if (elem.name == this.chooseName) {
                    this.chooseNotebooks.push(elem);
                }
            }
        },
        searchFunction() {

        },
        myFilter() {
            let searchString = this.search;
            if (!searchString) {
                return this.chooseNotebooks;
            }
            searchString = searchString.trim().toLowerCase();

            this.chooseNotebooks.length = 0;
            return this.notebookArr.filter(item => {
                if ((item.name.toLowerCase().indexOf(searchString) !== -1) || (item.price.toLowerCase().indexOf(searchString) !== -1)) {
                    // return item;
                    this.chooseNotebooks.push(item);
                    return this.chooseNotebooks;
                }
            })
        }
    },
    mounted() {
        this.showNotebook(0)
    },

}

Vue.createApp(NoteApp).mount('#container')
