<template>
  <div ref="content">
    <h2>Leave Request Form</h2>

    <p>เรื่อง: ขออนุมัติลาป่วย</p>
    <p>เรียน: .......................................................</p>

    <p>
      all about <input v-model="about" /> 
      ข้าพเจ้า <input v-model="employeeName" /> ตำแหน่ง <input v-model="employeePosition" /><br />
      สังกัด <input v-model="employeeDepartment" />  ลาเนื่องจาก <input v-model="leaveType" /><br />
      becuase <input v-model="recipient" /> start date <input v-model="startDate" /><br />
      Enddate <input v-model="endDate" /> sumDay <input v-model="sumday" /> <br />
      paststart date <input v-model="paststartDate" />  pastEnddate  <input v-model="pastendDate" /><br />
      pastsumday<input v-model="pastsumday" /> phone <input v-model="phone" /><br />
      sup<input v-model="sup" /> supdepart <input v-model="supdepart" /><br />
      date<input v-model="date" />
    </p>

    <button @click="generatePDF">Generate PDF</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      about: '',
      leaveType: '',
      recipient: '',
      employeeName: '',
      employeePosition: '',
      employeeDepartment: '',
      startDate: '',
      endDate: '',
      sumday: '',
      paststartDate: '',
      pastendDate: '',
      pastsumday: '',
      phone: '',
      sup: '',
      supdepart: '',
      date:'',
    };
  },
  methods: {
   async generatePDF() {
       try {
   alert("Thank you for your feedback!");
    // Use Vuex mutations to update state
    this.$store.commit('updateEmployeeName', this.employeeName);
     this.$store.commit('updateEmployeePosition', this.employeePosition);
      this.$store.commit('updateEmployeeDepartment', this.employeeDepartment);
      this.$store.commit('updateLeaveType', this.leaveType);
      this.$store.commit('updateRecipient', this.recipient);
      this.$store.commit('updateStartDate', this.startDate);
      this.$store.commit('updateEndDate', this.endDate);
      this.$store.commit('updateSumDay', this.sumday);
      this.$store.commit('updatePastStartDate', this.paststartDate);
      this.$store.commit('updatePastEndDate', this.pastendDate);
      this.$store.commit('updatePastSumDay', this.pastsumday);
      this.$store.commit('updatePhone', this.phone);
      this.$store.commit('updateSup', this.sup);
      this.$store.commit('updateSupDepart', this.supdepart);
      this.$store.commit('updateAbout',this.about)
      this.$store.commit('updateDate',this.date)
  } catch (error) {
    console.error('Error updating employee data:', error);
  }
    },
  },
};
</script>

<style>
.dotted-underline {
  text-decoration: underline dotted;
}
</style>






