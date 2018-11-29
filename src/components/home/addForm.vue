<template>
    <el-form :model="values" :rules="rules" ref='addFormSub'>
        <el-form-item label="车牌号" :label-width="formLabelWidth" prop="carplatenumber">
            <el-input v-model="values.carplatenumber" placeholder="请输入" @change='handleChange' @blur='handleChange'></el-input>
        </el-form-item>
        <el-form-item label="车辆类型" :label-width="formLabelWidth" prop="carmodel">
            <el-input v-model="values.carmodel" placeholder="请输入"></el-input>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        data() {
            return {
                formLabelWidth: '80px',
                rules: {
                    carplatenumber: [{
                            required: true,
                            message: '请输入',
                            trigger: 'change'
                        },
                        {
                            max: 7,
                            message: '格式有误',
                            trigger: 'change'
                        }
                    ],
                    carmodel: [{
                        required: true,
                        message: '请输入',
                        trigger: 'change'
                    }]
                },
            }
        },
        props: {
            values: {
                type: Object,
            },
            addForms: {
                type: String
            },
            callback: Function
        },
        methods: {
            handleChange(e) {
                this.callback(e); // 将参数传回父组件中的回调函数
                // this.$emit('change', e);
            }
        },
        beforeUpdate() {}
    }
</script>