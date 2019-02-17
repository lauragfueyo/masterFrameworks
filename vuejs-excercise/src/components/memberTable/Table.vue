<template>
  <v-app>
    <v-container>
      <h1>Member Page</h1>
      <v-layout>
        <v-text-field 
          label="Organization Name" 
          v-model="value"
        ></v-text-field>
        <v-btn type="submit" color="info" @click.prevent="loadMembers">Search</v-btn>
      </v-layout>
    </v-container>
    <div>
      <v-container grid-list-md>
        <v-layout row wrap>
          <template v-for="member in members">
            <member-row :key="member.id" :member="member"/>
          </template>
        </v-layout>
      </v-container>
    </div>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import MemberHead from "./Head.vue";
import MemberRow from "./Row.vue";
import { Member } from "../../model/member";
import { getAllMembers } from "../../api/memberAPI";

export default Vue.extend({
  name: "MemberTable",
  components: { MemberHead, MemberRow },
  data: () => ({
    members: [] as Member[],
    value: ""
  }),
  methods: {
    loadMembers: function() {
      const organizationName =! this.value ? "Lemoncode" : this.value;
      getAllMembers(organizationName).then(members => {
        this.members = members;
      });
    }
  }
});

</script>

<style module>
</style>
