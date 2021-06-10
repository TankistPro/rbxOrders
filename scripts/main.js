Vue.component('tabel-row', {
    props: ['record'],
    data() {
        return {
            ischangeWallet: false,
            ischangeTotal: false,
            ischangeStatus: false
        }
    },
    template: 
    `
    <tr>
        <td class="first-th">{{ record['ID ВЫВОДА'] }}</td>
        <td class="first-th">{{ record['ВАЛЮТА'] }}</td>
        <td class="first-th">
            <div class="first-block" v-if="!ischangeWallet">
                <p>+{{ record['КОШЕЛЁК'] }}</p>
                <img class="tital" @click='ischangeWallet = true' src="./img/pen.svg" alt="">
            </div>
            <div class="change-block" v-else>
                <img class="change-block__reload" src="./img/reload.svg">
                <input type="text" v-model="record['КОШЕЛЁК']">
                <img class="change-block__ok" @click='ischangeWallet = false' src="./img/ok.svg">
            </div>
        </td>
        <td class="first-th">{{ record['USER ID'] }}</td>
        <td class="first-th">
            <div class="total-block" v-if="!ischangeTotal">
                <p>{{ record['СУММА'] }}</p>
                <img class="total-pen" @click="ischangeTotal = true" src="./img/pen.svg" alt="">
            </div>
            <div class="change-total" v-else>
                <input type="text" v-model="record['СУММА']">
                <img class="change-block__ok" @click='ischangeTotal = false' src="./img/ok.svg">
            </div>
        </td>
        <td class="first-th">
            <div class="status-block"> 
                <div 
                    v-if="!ischangeStatus"
                    @click="ischangeStatus = true"
                    class="status"
                    :class="{ ok: record['СТАТУС'] === 'Успешно', error: record['СТАТУС']=== 'Ошибка', pending: record['СТАТУС'] === 'Ожидание' }"
                >
                    <p>{{ record['СТАТУС'] }}</p>
                </div>
                <div class="change-status" v-if="ischangeStatus">
                        <div class="status ok" @click="ischangeStatus = false; record['СТАТУС'] = 'Успешно'">
                            <p>Успешно</p>
                        </div>
                        <div class="status error" @click="ischangeStatus = false; record['СТАТУС'] = 'Ошибка'">
                            <p>Ошибка</p>
                        </div>
                        <div class="status pending" @click="ischangeStatus = false; record['СТАТУС'] = 'Ожидание'">
                            <p>Ожидание</p>
                        </div>
                </div>
            </div>   
        </td>
        <td class="first-th">{{ record['ДАТА'] }}</td>
    </tr>
    `
})

const app = new Vue({
    el: '.wrapper',
    data: {
        search: null,
        searchType: "ID ВЫВОДА",
        pageNumber: 0,
        recordsSize: 10,
        records: [
            {'ID ВЫВОДА': 876545678, 'ВАЛЮТА': 'EUR', 'КОШЕЛЁК':'7 (925) 331-21-22', 'USER ID':'0001', 'СУММА':'200 €', 'СТАТУС': 'Успешно', 'ДАТА': '22/01/2021 20:01'},
            {'ID ВЫВОДА': 125656545, 'ВАЛЮТА': 'RUB', 'КОШЕЛЁК':'7 (925) 341-34-23', 'USER ID':'0002', 'СУММА':'200 ₽', 'СТАТУС': 'Ошибка', 'ДАТА': '22/01/2021 20:01'},
            {'ID ВЫВОДА': 222554412, 'ВАЛЮТА': 'EUR', 'КОШЕЛЁК':'7 (925) 235-32-23', 'USER ID':'0003', 'СУММА':'200 €', 'СТАТУС': 'Ожидание', 'ДАТА': '22/01/2021 20:01'},
            {'ID ВЫВОДА': 452112554, 'ВАЛЮТА': 'RUB', 'КОШЕЛЁК':'7 (925) 546-55-54', 'USER ID':'0004', 'СУММА':'200 ₽', 'СТАТУС': 'Успешно', 'ДАТА': '22/01/2021 20:01'},
            {'ID ВЫВОДА': 785125240, 'ВАЛЮТА': 'EUR', 'КОШЕЛЁК':'7 (925) 334-21-23', 'USER ID':'0005', 'СУММА':'200 €', 'СТАТУС': 'Ошибка', 'ДАТА': '22/01/2021 20:01'},
            {'ID ВЫВОДА': 445550000, 'ВАЛЮТА': 'EUR', 'КОШЕЛЁК':'7 (925) 123-12-22', 'USER ID':'0006', 'СУММА':'200 €', 'СТАТУС': 'Ожидание', 'ДАТА': '22/01/2021 20:01'},
            {'ID ВЫВОДА': 754554557, 'ВАЛЮТА': 'RUB', 'КОШЕЛЁК':'7 (925) 433-22-98', 'USER ID':'0007', 'СУММА':'200 ₽', 'СТАТУС': 'Успешно', 'ДАТА': '22/01/2021 20:01'},
            {'ID ВЫВОДА': 255225525, 'ВАЛЮТА': 'EUR', 'КОШЕЛЁК':'7 (925) 331-21-22', 'USER ID':'0008', 'СУММА':'200 €', 'СТАТУС': 'Успешно', 'ДАТА': '22/01/2021 20:01'},
            {'ID ВЫВОДА': 125252212, 'ВАЛЮТА': 'EUR', 'КОШЕЛЁК':'7 (925) 341-34-23', 'USER ID':'0009', 'СУММА':'200 €', 'СТАТУС': 'Ошибка', 'ДАТА': '22/01/2021 20:01'},
            {'ID ВЫВОДА': 232321255, 'ВАЛЮТА': 'EUR', 'КОШЕЛЁК':'7 (925) 235-32-23', 'USER ID':'0010', 'СУММА':'200 €', 'СТАТУС': 'Ожидание', 'ДАТА': '22/01/2021 20:01'},
            {'ID ВЫВОДА': 021022012, 'ВАЛЮТА': 'EUR', 'КОШЕЛЁК':'7 (925) 546-55-54', 'USER ID':'0011', 'СУММА':'200 €', 'СТАТУС': 'Успешно', 'ДАТА': '22/01/2021 20:01'},
            {'ID ВЫВОДА': 785125240, 'ВАЛЮТА': 'EUR', 'КОШЕЛЁК':'7 (925) 334-21-23', 'USER ID':'0012', 'СУММА':'200 €', 'СТАТУС': 'Ошибка', 'ДАТА': '22/01/2021 20:01'},
            {'ID ВЫВОДА': 228282285, 'ВАЛЮТА': 'EUR', 'КОШЕЛЁК':'7 (925) 123-12-22', 'USER ID':'0013', 'СУММА':'200 €', 'СТАТУС': 'Ожидание', 'ДАТА': '22/01/2021 20:01'},
            {'ID ВЫВОДА': 225524225, 'ВАЛЮТА': 'EUR', 'КОШЕЛЁК':'7 (925) 433-22-98', 'USER ID':'0014', 'СУММА':'200 €', 'СТАТУС': 'Успешно', 'ДАТА': '22/01/2021 20:01'},
            {'ID ВЫВОДА': 123654788, 'ВАЛЮТА': 'EUR', 'КОШЕЛЁК':'7 (925) 331-21-22', 'USER ID':'0015', 'СУММА':'200 €', 'СТАТУС': 'Успешно', 'ДАТА': '22/01/2021 20:01'},
            {'ID ВЫВОДА': 125786542, 'ВАЛЮТА': 'EUR', 'КОШЕЛЁК':'7 (925) 341-34-23', 'USER ID':'0016', 'СУММА':'200 €', 'СТАТУС': 'Ошибка', 'ДАТА': '22/01/2021 20:01'},
            {'ID ВЫВОДА': 234554678, 'ВАЛЮТА': 'EUR', 'КОШЕЛЁК':'7 (925) 235-32-23', 'USER ID':'0017', 'СУММА':'200 €', 'СТАТУС': 'Ожидание', 'ДАТА': '22/01/2021 20:01'},
            {'ID ВЫВОДА': 452112554, 'ВАЛЮТА': 'EUR', 'КОШЕЛЁК':'7 (925) 546-55-54', 'USER ID':'0018', 'СУММА':'200 €', 'СТАТУС': 'Успешно', 'ДАТА': '22/01/2021 20:01'},
            {'ID ВЫВОДА': 896896515, 'ВАЛЮТА': 'EUR', 'КОШЕЛЁК':'7 (925) 334-21-23', 'USER ID':'0019', 'СУММА':'200 €', 'СТАТУС': 'Ошибка', 'ДАТА': '22/01/2021 20:01'},
            {'ID ВЫВОДА': 234554654, 'ВАЛЮТА': 'EUR', 'КОШЕЛЁК':'7 (925) 123-12-22', 'USER ID':'0020', 'СУММА':'200 €', 'СТАТУС': 'Ожидание', 'ДАТА': '22/01/2021 20:01'},
            {'ID ВЫВОДА': 543433456, 'ВАЛЮТА': 'EUR', 'КОШЕЛЁК':'7 (925) 433-22-98', 'USER ID':'0021', 'СУММА':'200 €', 'СТАТУС': 'Успешно', 'ДАТА': '22/01/2021 20:01'},
            {'ID ВЫВОДА': 213323443, 'ВАЛЮТА': 'EUR', 'КОШЕЛЁК':'7 (925) 331-21-22', 'USER ID':'0022', 'СУММА':'200 €', 'СТАТУС': 'Успешно', 'ДАТА': '22/01/2021 20:01'},
        ]
    },
    computed: {
        filterRecords() {
            if (this.search) {
                return this.records.filter(record => String(record[this.searchType]).toLowerCase().indexOf(this.search.toLowerCase(), 0) > -1)
            }
            return this.paginationData
        }, 
        pageCount() {
            return Math.ceil(this.records.length / this.recordsSize);
        },
        paginationData() {
            return this.records.slice(this.pageNumber * this.recordsSize, this.pageNumber * this.recordsSize + this.recordsSize)
        }
    },
    methods: {
        toggleSearchType(event) {
            this.searchType = event.target.textContent;
        },
        nextPage() {
            if(this.pageNumber < this.pageCount - 1)
                this.pageNumber++;
        },
        prevPage() {
            if(this.pageNumber > 0)
                this.pageNumber--;
        }
    }
})