<template>
  <!-- Switch button -->
    <button @click="toggleLanguage" class="language-switch-button">
      {{ currentLanguage === 'english' ? 'Switch to Thai' : 'เปลี่ยนเป็นภาษาอังกฤษ' }}
    </button>
  <div class="product-form" v-if="currentLanguage === 'english'" >
    <h2>GPT Product</h2>
    <form @submit.prevent="addProduct" class="form" >
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="productName" class="form-input" required>
      </div>
      
      <div class="form-group">
        <label for="price">Price:</label>
        <input type="number" id="price" v-model="productPrice" class="form-input" required>
      </div>
      
      <div class="form-group">
        <label for="description">Description:</label>
        <textarea id="description" v-model="productDescription" class="form-textarea" required></textarea>
      </div>
      
      <button type="submit" class="form-button">Review Product</button>
    </form>
  </div>
    <div class="response" v-if="currentLanguage === 'english'" >
    <h3>Response from Backend ENG </h3>
    <div v-if="loading" class="loading-indicator">
      <div class="spinner"></div>
      <p>Loading...</p>
    </div>
    <div v-else>
      <div class="response-item">
        <span class="response-label">Name : </span>
        <span class="response-value">{{ response.name }}</span>
      </div>
      <div class="response-item">
        <span class="response-label">GPT Result : </span>
        <span class="response-value">{{ response.GPT }}</span>
      </div>
    </div>
  </div>

    <!-- Second form for Thai input -->
  <div class="product-form" v-if="currentLanguage === 'thai'" >
    <h2>เพิ่มสินค้าใหม่</h2>
    <form @submit.prevent="addProductThai" class="form">
      <div class="form-group">
        <label for="name-thai">ชื่อสินค้า:</label>
        <input type="text" id="name-thai" v-model="productNameThai" class="form-input" required>
      </div>
          <div class="form-group">
        <label for="price">ราคา:</label>
        <input type="number" id="price" v-model="productPriceThai" class="form-input" required>
      </div>
      <div class="form-group">
        <label for="description">รายละเอียด:</label>
        <textarea id="description" v-model="productDescriptionThai" class="form-textarea" required></textarea>
      </div>
      <button type="submit" class="form-button">รีวิวสินค้า</button>
    </form>
  </div>
  <div class="response" v-if="currentLanguage === 'thai'" >
    <h3>Response from Backend Thai </h3>
    <div v-if="loading" class="loading-indicator">
      <div class="spinner"></div>
      <p>กำลังโหลด...</p>
    </div>
    <div v-else>
      <div class="response-item">
        <span class="response-label">ชื่อ : </span>
        <span class="response-value">{{ thairesponse.Thainame }}</span>
      </div>
      <div class="response-item">
        <span class="response-label">ผลลัพธ์จากGPT : </span>
        <span class="response-value">{{ thairesponse.ThaiGPT }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      currentLanguage: 'english',
      productName: '',
      productPrice: '',
      productDescription: '',
      productNameThai: '',
      productPriceThai: '',
      productDescriptionThai: '',
      response: { name: '', GPT: '' },
      thairesponse: { Thainame : '', ThaiGPT: '' },
      loading: false
    };
  },
  methods: {
    addProduct() {
      this.loading = true; 
      const ProductEng = {
        name: this.productName,
        price: this.productPrice,
        description: this.productDescription,
      };
       axios.post('http://127.0.0.1:5000/add_product', ProductEng)
        .then(response => {
          console.log(response.data.message); 
          this.response.name = response.data.name;
          this.response.GPT = response.data.GPT;
          this.productName = '';
          this.productPrice = '';
          this.productDescription = '';
          this.loading = false;
        })
        .catch(error => {
          console.error('Error adding product:', error);
          this.loading = false;
        });
      this.productName = '';
      this.productPrice = '';
      this.productDescription = '';
    },
    addProductThai() {
      this.loading = true; 
      const ProductThai = {
        nameThai: this.productNameThai,
        priceThai: this.productPriceThai,
        descriptionThai: this.productDescriptionThai,
      };
       axios.post('http://127.0.0.1:5000/add_Thaiproduct', ProductThai)
        .then(response => {
          console.log(response.data.message); 
          this.thairesponse.Thainame = response.data.Thainame;
          this.thairesponse.ThaiGPT = response.data.ThaiGPT;
          this.productNameThai = '';
          this.productPriceThai= '';
          this.productDescriptionThai = '';
          this.loading = false;
        })
        .catch(error => {
          console.error('Error adding product:', error);
          this.loading = false;
        });
      this.productNameThai = '';
      this.productPriceThai = '';
      this.productDescriptionThai = '';
    },
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === 'english' ? 'thai' : 'english';
    }
  }
};
</script>

<style>
.language-switch-button {
  margin-bottom: 10px;
  background-color: #007bff;
  color: #fff;
  padding: 6px 10px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.language-switch-button:hover {
  background-color: #0056b3;
}
.product-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

.form-label {
  font-weight: bold;
  margin-bottom: 5px;
}

.form-input,
.form-textarea {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.3s ease;
  width: 100%;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #66afe9;
}

.form-button {
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form-button:hover {
  background-color: #0056b3;
}
.response {
  margin-top: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.response h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.response-item {
  align-items: center;
  justify-content: space-between; /* Align items to both ends */
  margin-bottom: 10px;
}

.response-label {
  font-weight: bold;
  width: 100px;
}

.response-value {
  flex: 1;
  text-align: right; /* Align the value to the right */
}

.loading-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.spinner {
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #333;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin-bottom: 10px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>

