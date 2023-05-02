<template>
  <div class="card">
    <div
      v-if="project.building_state && !project.is_discount"
      :class="
        project.building_state !== '50% готовності' ? 'percent' : 'heading'
      "
    >
      {{ project.building_state }}
    </div>
    <div class="discount" v-if="project.is_discount">Знижка -3%</div>
    <img :src="project.img_url" alt="2 rooms apartment" style="width: 100%" />
    <div class="card-container">
      <div class="card-text-wrapper">
        <h3 class="card-heading">{{ project.project }}</h3>
        <div class="card-text-info">
          <p class="text-info-square">
            Площа<br /><span class="square">{{ project.square }}</span>
          </p>
          <p class="text-info-rooms-count">
            К-сть кімнат<br /><span class="rooms-count">{{
              project.rooms_count
            }}</span>
          </p>
          <p class="text-info-object-type">
            Секція<br /><span class="object-type">{{ project.section }}</span>
          </p>
        </div>
        <div class="wrapper-btn">
          <button class="btn-price" @click="showModal1 = true">
            Дізнатись ціну
          </button>
          <button @click="showModal2 = true" class="btn-tour">
            <svg
              width="25"
              height="23"
              viewBox="0 0 25 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.9375 11.5317V5.75658C20.9375 3.90892 19.4911 2.41402 17.7232 2.41402H16.75C16.3571 1.0213 15.125 0 13.6607 0H11.3393C9.875 0 8.64285 1.0213 8.24999 2.41402H7.27681C5.50891 2.41402 4.06249 3.90892 4.06249 5.75658V11.5317C1.65176 12.4788 0 13.8901 0 15.7284C0 17.9382 2.51786 19.8045 6.66073 20.7237L5.9464 21.2622C5.29464 21.7543 5.53573 22.8313 6.33926 22.9613C6.57142 22.9984 6.82144 22.9427 7.01784 22.7942L9.43751 20.9651C9.84824 20.6587 9.9375 20.0644 9.64285 19.6466L7.88394 17.1212C7.74106 16.9169 7.52678 16.7869 7.28569 16.7405C6.49109 16.6105 5.93752 17.5483 6.41071 18.2353L6.85714 18.876C3.55355 18.0961 1.78571 16.7405 1.78571 15.7284C1.78571 15.0321 2.60713 14.2057 4.11606 13.5094C4.34821 15.1064 5.66962 16.3412 7.27681 16.3412H17.7232C19.3304 16.3412 20.6518 15.1064 20.8839 13.5094C22.3929 14.2057 23.2143 15.0321 23.2143 15.7284C23.2143 16.8705 20.9643 18.4489 16.8036 19.1359C16.3215 19.2195 15.991 19.6931 16.0625 20.2037C16.1339 20.6587 16.5179 20.9836 16.9464 20.9836C16.9911 20.9836 17.0357 20.9836 17.0893 20.9743C21.9643 20.1665 25 18.1611 25 15.7284C25 13.8901 23.3482 12.4788 20.9375 11.5317ZM12.5 13.5558C10.2857 13.5558 8.48214 11.6803 8.48214 9.37762C8.48214 7.07501 10.2857 5.19946 12.5 5.19946C14.7143 5.19946 16.5179 7.07501 16.5179 9.37762C16.5179 11.6803 14.7143 13.5558 12.5 13.5558Z"
                fill="#C1F600"
              />
              <path
                d="M12.4997 11.699C13.7325 11.699 14.7319 10.6598 14.7319 9.37784C14.7319 8.09588 13.7325 7.05664 12.4997 7.05664C11.2669 7.05664 10.2676 8.09588 10.2676 9.37784C10.2676 10.6598 11.2669 11.699 12.4997 11.699Z"
                fill="#C1F600"
              />
            </svg>
            3D тур
          </button>
          <a
            class="aero-tour"
            href="https://virtualukraine.travel/F1ptM7G6Qh/39555754p&51.22h&88.28t"
            target="_blank"
          >
            <svg
              width="32"
              height="16"
              viewBox="0 0 32 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.8927 10.3684C23.8806 10.3255 23.8573 10.2867 23.8252 10.2559L21.0753 7.71094H20.2178L19.1328 9.5884L22.0077 11.2809L23.6302 14.8083C23.6876 15.0012 23.8192 15.1635 23.9962 15.2594C24.1732 15.3552 24.381 15.3769 24.5739 15.3195C24.7669 15.2622 24.9291 15.1305 25.025 14.9535C25.1209 14.7765 25.1425 14.5687 25.0852 14.3758L23.8927 10.3684Z"
                fill="#C1F600"
              />
              <path
                d="M10.8972 7.71094L8.14723 10.2559C8.11512 10.2867 8.09182 10.3255 8.07973 10.3684L6.88976 14.4083C6.87899 14.461 6.87314 14.5145 6.87226 14.5683C6.85815 14.7547 6.91413 14.9396 7.02925 15.0868C7.14436 15.2341 7.3103 15.333 7.49457 15.3643C7.67883 15.3956 7.86814 15.3569 8.02539 15.2559C8.18265 15.1549 8.29653 14.9989 8.34473 14.8183L9.97469 11.2809L12.8296 9.6009L11.7397 7.71094H10.8972Z"
                fill="#C1F600"
              />
              <path
                d="M15.9906 4.04883C15.6497 4.04834 15.3163 4.149 15.0327 4.33807C14.7491 4.52715 14.5279 4.79614 14.3972 5.11098C14.2665 5.42582 14.2322 5.77236 14.2986 6.10671C14.365 6.44107 14.5291 6.74821 14.7701 6.98925C15.0112 7.2303 15.3183 7.3944 15.6527 7.46078C15.987 7.52716 16.3336 7.49284 16.6484 7.36216C16.9632 7.23148 17.2322 7.01032 17.4213 6.72668C17.6104 6.44304 17.711 6.10967 17.7105 5.76879C17.7099 5.31283 17.5285 4.87574 17.2061 4.55332C16.8836 4.23091 16.4465 4.04949 15.9906 4.04883Z"
                fill="#C1F600"
              />
              <path
                d="M31.525 0.588488H31.495L29.1175 0.0884995C28.2768 -0.0873787 27.4021 0.0062208 26.6176 0.355994L26.1026 0.585988V0.250995C26.1026 0.184693 26.0763 0.121105 26.0294 0.0742223C25.9825 0.0273393 25.9189 0.00100085 25.8526 0.00100085C25.7863 0.00100085 25.7227 0.0273393 25.6758 0.0742223C25.629 0.121105 25.6026 0.184693 25.6026 0.250995V0.583488L25.0901 0.353493C24.3054 0.0045486 23.4309 -0.0890225 22.5902 0.085999L20.2002 0.585988C19.7002 0.713485 19.7002 1.20347 19.7152 1.38597V1.44597C19.7159 1.6102 19.7814 1.76751 19.8976 1.88364C20.0137 1.99977 20.171 2.0653 20.3352 2.06596H25.6051V2.83094H25.2401C25.1117 2.83078 24.9882 2.88001 24.8951 2.96844C24.802 3.05686 24.7466 3.1777 24.7401 3.30593L24.6676 4.5859H19.9177L18.6078 2.31845C18.5205 2.16732 18.3952 2.04165 18.2444 1.95393C18.0935 1.86622 17.9223 1.81951 17.7478 1.81846H14.2004C14.0254 1.81908 13.8537 1.86558 13.7024 1.95331C13.551 2.04105 13.4254 2.16695 13.3379 2.31845L12.0304 4.5834H7.28052L7.20552 3.30343C7.1991 3.1752 7.1436 3.05436 7.05052 2.96594C6.95744 2.87751 6.83392 2.82828 6.70553 2.82844H6.38554V2.06346H11.6554C11.8201 2.06346 11.978 1.99822 12.0947 1.88202C12.2114 1.76582 12.2772 1.60813 12.2779 1.44347V1.40847C12.3034 1.24077 12.2713 1.06938 12.1869 0.922264C12.1024 0.775153 11.9706 0.661016 11.8129 0.598488H11.7829L9.40297 0.0984985C8.56228 -0.0778964 7.68736 0.0157212 6.90303 0.365994L6.38804 0.595988V0.250995C6.38804 0.184693 6.3617 0.121105 6.31482 0.0742223C6.26793 0.0273393 6.20435 0.00100085 6.13804 0.00100085C6.07174 0.00100085 6.00815 0.0273393 5.96127 0.0742223C5.91439 0.121105 5.88805 0.184693 5.88805 0.250995V0.583488L5.38806 0.353493C4.60324 0.00504298 3.7289 -0.0885112 2.88812 0.085999L0.490669 0.583488C-0.00931961 0.710986 -0.00931961 1.20098 0.00318011 1.38347V1.44347C0.00316817 1.60661 0.0674575 1.76318 0.18211 1.87924C0.296763 1.99529 0.452539 2.06148 0.615667 2.06346H5.88555V2.82844H5.53056C5.40217 2.82828 5.27864 2.87751 5.18556 2.96594C5.09249 3.05436 5.03699 3.1752 5.03057 3.30343L4.80807 7.12584C4.80364 7.20207 4.81485 7.2784 4.841 7.35014C4.86715 7.42187 4.90769 7.4875 4.96014 7.543C5.01259 7.59849 5.07583 7.64267 5.14598 7.67282C5.21613 7.70297 5.29171 7.71846 5.36806 7.71833H6.88303C6.95929 7.71844 7.03476 7.70298 7.10483 7.67289C7.1749 7.6428 7.23809 7.59871 7.29052 7.54333C7.3759 7.45214 7.42865 7.33521 7.44052 7.21084H12.0304L13.3379 9.47829C13.4254 9.62979 13.551 9.75569 13.7024 9.84343C13.8537 9.93117 14.0254 9.97766 14.2004 9.97828H17.7603C17.9348 9.97723 18.106 9.93052 18.2569 9.84281C18.4077 9.75509 18.533 9.62943 18.6203 9.47829L19.9302 7.21084H24.5226C24.5369 7.34852 24.6019 7.47596 24.7049 7.56838C24.808 7.66079 24.9417 7.71157 25.0801 7.71083H26.5951C26.6713 7.71094 26.7468 7.69548 26.8169 7.66539C26.887 7.6353 26.9502 7.59121 27.0026 7.53583C27.0544 7.47985 27.0946 7.4141 27.1208 7.34242C27.147 7.27074 27.1586 7.19457 27.1551 7.11834L26.9301 3.29593C26.9237 3.1677 26.8682 3.04686 26.7751 2.95844C26.682 2.87001 26.5585 2.82078 26.4301 2.82094H26.1001V2.06346H31.3725C31.5365 2.06279 31.6935 1.99718 31.8093 1.88098C31.925 1.76479 31.99 1.60747 31.99 1.44347V1.40847C32.0179 1.23923 31.987 1.06551 31.9024 0.916295C31.8178 0.767079 31.6846 0.65138 31.525 0.588488ZM15.9903 7.99083C15.5507 7.99132 15.1207 7.8614 14.7549 7.61749C14.3891 7.37358 14.1039 7.02666 13.9353 6.6206C13.7667 6.21455 13.7223 5.76761 13.8078 5.33633C13.8932 4.90505 14.1047 4.50881 14.4154 4.19775C14.7261 3.88668 15.1221 3.67477 15.5533 3.58881C15.9845 3.50285 16.4315 3.54672 16.8377 3.71486C17.244 3.883 17.5912 4.16785 17.8356 4.53339C18.0799 4.89892 18.2103 5.32871 18.2103 5.76837C18.2096 6.35717 17.9756 6.9217 17.5595 7.33827C17.1434 7.75485 16.5791 7.9895 15.9903 7.99083Z"
                fill="#C1F600"
              />
            </svg>
            Аеро-тур
          </a>
        </div>
      </div>
      <Modal
        v-if="showModal1"
        @close="showModal1 = false"
        title="Передзвонимо вам протягом 25 секунд"
      >
        <div class="callback">
          <input type="tel" placeholder="+380" />
          <CustomButton label="Чекаю на дзвінок" class="btn-callback" />
        </div>
      </Modal>

      <Modal
        v-if="showModal2"
        @close="showModal2 = false"
        title="Приклад вашої майбутньої квартири"
      >
        <h3>Тут має бути контент 3D туру по картирі</h3>
      </Modal>
    </div>
  </div>
</template>

<script setup>
import Modal from "./shared/Modal.vue";
import CustomButton from "./shared/CustomButton.vue";

import { ref } from "vue";

const showModal1 = ref(false);
const showModal2 = ref(false);

const props = defineProps({
  project: {
    type: Object,
    requiared: true,
  },
});
</script>

<style lang="scss" scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 30px;
  width: 355px;
}

.discount {
  text-align: center;
  background: var(--accent-color);
  border-radius: 30px 30px 0 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 145%;
}

.card-text-wrapper {
  padding: 20px 30px 34px 30px;
}

.card-heading {
  text-align: center;
  font-family: "Manrope";
  font-weight: 700;
  font-size: 20px;
  line-height: 145%;
  color: #191919;
  margin-top: 0;
  margin-bottom: 15px;
}

.card-text-info {
  display: flex;
  height: 56px;
  justify-content: space-between;
  font-size: 12px;
  line-height: 16px;
  color: var(--primary-text-color);
}

.text-info-square {
  text-align: center;
  padding-top: 8px;
  padding-right: 15px;
  padding-bottom: 8px;
}

.text-info-rooms-count {
  text-align: center;
  padding-top: 8px;
  padding-right: 15px;
  padding-left: 15px;
  padding-bottom: 8px;
}

.text-info-object-type {
  text-align: center;
  padding-top: 8px;
  padding-left: 15px;
  padding-bottom: 8px;
}

.rooms-count,
.square,
.object-type {
  display: inline-block;
  padding-top: 7px;
  font-weight: 700;
  font-size: 16px;
}

.wrapper-btn {
  display: flex;
  padding: 22px 0 0px 0;
  column-gap: 12px;
  align-items: center;
}

.btn-price {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 165px;
  padding: 13px 23.5px;
  background: #ffffff;
  border: 2px solid #c1f600;
  border-radius: 25.5px;
  height: 50px;
  font-family: "Manrope";
  font-weight: 700;
  font-size: 16px;
  line-height: 145%;
}

.btn-tour {
  display: block;
  cursor: pointer;
  width: 53px;
  height: 50px;
  background: none;
  border: 2px solid #f3f3f3;
  border-radius: 15px;
  font-family: "Manrope";
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #191919;
}

.aero-tour {
  display: block;
  cursor: pointer;
  text-align: center;
  padding-top: 7px;
  width: 53px;
  height: 50px;
  background: none;
  border: 2px solid #f3f3f3;
  border-radius: 15px;
  font-family: "Manrope";
  font-weight: 700;
  font-size: 12px;
  line-height: 10px;
  color: #191919;
}

.callback {
  display: flex;
  column-gap: 40px;
  align-items: center;
}
input {
  display: block;
  font-size: 16px;
}

.btn-callback {
  display: flex;
}

.heading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  font-size: 12px;
  line-height: 16px;
  color: var(--primary-text-color);
  background: #f0f5fc;
  border-radius: 30px 30px 0 0;
  background: linear-gradient(to right, #d1dbe8 50%, #f0f5fc 50%);
}
.percent {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 24px;
  font-size: 12px;
  line-height: 16px;
  color: #191919;
  background: #f0f5fc;
  border-radius: 30px 30px 0 0;
}
</style>
