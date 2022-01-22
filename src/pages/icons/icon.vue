<template>
    <component :is="name" />
</template>

<script>
import * as icons from "."

export default {
    name: "icon", 
    components: {...icons},
    props: {
        name: {
            type: String,
            required: true,
            validator (value) {
                return Object.keys(icons).includes(value)
            }
        }
    }    
}
</script>
