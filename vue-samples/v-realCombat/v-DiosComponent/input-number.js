// 数字输入框组件

/** 
 * 主角是该组件，所有的组件配置都在这里定义。
 * template中定义了组件的根节点，因为为是独立组建，所以应该对每个prop校验。
 * 根据需求有最大值、最小值、默认值3个prop，max和min都是数字类型，默认值分别是无限大和无限小；
 * value也hi数字类型，默认值为0.
 */
function isValueNumber(value) {
    return (/(^-?[0-9]+\.{1}\d+$) | (^-?[1-9][0-9]*$)| (^-?0{1}$)/).test(value+'')
}
Vue.component('input-number',{
    template: 
    `
        <div class="input-number">
            <input
                type="text"
                :value="currentValue"
                @change="handleChange">
            <button
                @click="handleDown"
                :disabled="currentValue <= min">-</button>
            <button
                @click="handleUp"
                :disabled="currentValue >= max">+</button>
        </div>
    `,
    props:{
        max:{
            type: Number,
            default: Infinity
        },
        min:{
            type: Number,
            default: -Infinity
        },
        value:{
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            currentValue: this.value
        }
    },
    watch:{
        currentValue: function(val){
            this.$emit('input',val);
            this.$emit('on-change',val);
        },
        value: function(val) {
            this.updateValue(val);            
        }
    },
    methods: {
        handleDown: function () {
            if(this.currentValue <= this.min) return;
            this.currentValue--;
        },
        handleUp: function () {
            if(this.currentValue >= this.max) return;
            this.currentValue++;
        },
        handleChange: function (event) {
            var val = event.target.value.trim();
            var max = this.max;
            var min = this.min;
            if(isValueNumber(val)){
                val = Number(val);
                this.currentValue = val;
                if(val > max){
                    this.currentValue = max;
                }else if(val < min){
                    this.currentValue = min;
                }
            }else{
                event.target.value = this.currentValue;
            }
        },
        updateValue(val) {
            if(val > this.max) val = this.max;
            if(val < this.min) val = this.min;
            this.currentValue = val;
        }
    },
    mounted: function () {
        this.updateValue(this.value);
    }
});