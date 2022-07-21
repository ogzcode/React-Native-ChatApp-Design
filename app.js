Vue.component("input-box", {
    template: `
    <div class="input__box">
        <label class="label">{{labelText}}</label>
        <input 
            ref="input"
            :class="className" 
            :type="inputType" 
            :placeholder="placeText" 
            v-model="inputValue" 
            v-on:input="sendValue"
            :min="minValue"
            :max="maxValue"
            />
    </div>
    `,
    props: {
        labelText: {
            type: String,
            required: true
        },
        inputType: {
            type: String,
            required: true
        },
        placeText: {
            type: String,
            required: false
        },
        minValue: {
            type: Number,
            required: false
        },
        maxValue: {
            type: Number,
            required: false
        },
        className: {
            type: String,
            required: false
        }
    },
    data() {
        return {
            inputValue: ""
        };
    },
    methods: {
        sendValue() {
            this.$emit("send", this.inputValue);
        },
        reset() {
            this.$refs.input.value = 0;
        }
    },
     mounted(){
        if (this.inputType == "range") {
            this.reset();
        }
     }
});

function changeStyleWithRange(nodeValue, realNodeValue, oldValue){
    let result = 0;

    if (nodeValue < oldValue.old) {
        nodeValue *= -1;
        result = realNodeValue - (nodeValue + oldValue.old);
    }
    else {
        oldValue.old *= -1;
        result = realNodeValue + (nodeValue + oldValue.old);
    }
    oldValue.old = Math.abs(nodeValue);

    return result;
}

const widthOldValue = {old: 0};
const heightOldValue = {old: 0};
const radiusOldValue = {old: 0};

new Vue({
    el: "#app",
    data: {
        buttonText: "",
        styles: {
            fontSize: "",
            color: "",
            backgroundColor: "",
            width: "",
            height: "",
            borderRadius: "",
            border: ""
        }
    },
    methods: {
        getText(value) {
            this.buttonText = value;
        },
        getFontSize(value) {
            if (parseInt(value) < 12) {
                this.styles.fontSize = "12px";
            }
            else if (parseInt(value) > 64) {
                this.styles.fontSize = "64px";
            }
            else {
                this.styles.fontSize = value + "px";
            }
        },
        getTextColor(value) {
            this.styles.color = value;
        },
        getWidth(value) {
            this.styles.width = changeStyleWithRange(parseInt(value), 
            parseInt(window.getComputedStyle(this.$refs.btn).width), widthOldValue) + "px";
        },
        getHeight(value){
            this.styles.height = changeStyleWithRange(parseInt(value), 
            parseInt(window.getComputedStyle(this.$refs.btn).height), heightOldValue) + "px"
        },
        getRadius(value){
            this.styles.borderRadius = changeStyleWithRange(parseInt(value), 
            parseInt(window.getComputedStyle(this.$refs.btn).borderRadius), radiusOldValue) + "px"
        },
        getBackgroundColor(value) {
            this.styles.backgroundColor = value;
        },
        getBorder(value){
            if (!value){
                this.styles.border = "1px solid gray";
            }
            else {
                this.styles.border = "none";
            }
        }
    },
    computed: {
        printText() {
            return this.buttonText == "" ? "Text" : this.buttonText;
        }
    }
});