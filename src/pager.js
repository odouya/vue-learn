const template = `
    <div class="pager">

    <a @click="chagePage(1)" class="pager-item" :class="{disabled:current === 1}">首页</a>
    <a @click="chagePage(current - 1)" class="pager-item" :class="{disabled:current === 1}">上一页</a>

    <a @click="chagePage(item) class="pager-item" :class="{active:item===current}" v-for= "item in numbers">
        {{item}}
    </a>

    <a @click="chagePage(current + 1)" class="pager-item" :class="{disabled:current === pageNumber}">下一页</a>
    <a @click="chagePage(pageNumber)"  class="pager-item" :class="{disabled:current === pageNumber}">尾页</a>
    
    <span class="pager-text">
    <i>{{current}}</i>
    /
    <i>{{pageNumber}}</i></span></div>
`;


export default {
    template,
    props:{
        current:{
            type:Number,
            default:1
        },
        pageSize:{
            type:Number,
            default:10
        },
        panelNumber:{
            type:Number,
            default:5
        }

    },
    

    methods:{
        changePage(newPage){
            if(newPage < 1){
                mewPage = 1
            }else if(newPage > this.pageNumber){
                newPage = this.pageNumber;
            }
            this.$emit("change",newPage);
        }
    }
}