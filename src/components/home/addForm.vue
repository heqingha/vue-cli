<template>
    <el-form :model="values" :rules="rules" ref='addFormSub'>
        <el-form-item label="车牌号" :label-width="formLabelWidth" prop="carplatenumber">
            <el-input v-model="values.carplatenumber" placeholder="请输入"></el-input>
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
                addForm: {
                    carplatenumber: "",
                    carmodel: ""
                },
                rules: {
                    carplatenumber: [{
                            required: true,
                            message: '请输入',
                            trigger: 'blur'
                        },
                        {
                            max: 7,
                            message: '格式有误',
                            trigger: 'blur'
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
        },
        methods: {},
        beforeUpdate() {}
    }
</script>