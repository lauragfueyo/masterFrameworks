<template>
    <v-layout>
        <v-text-field 
            label="Organization Name" 
            v-model="value"
        ></v-text-field>
        <v-btn type="submit" color="info" @click.prevent="loadMembers">Search</v-btn>
    </v-layout>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "OrganizationInput",
    data: () => ({
        value: ""
    }),
    
});

</script>
