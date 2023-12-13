interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 1. 상품 목록을 받아오기 위한 API함수
function fetchProducts(): Promise<Product[]> {
    // 
}

// 만약 새로운 함수에서 기존 interface의 일부만 사용한다면, 보통은 아래와 같이 Product의 일부만 가져오는 형식으로 interface를 작성하게 됨
interface ProductDetail {
    id: number;
    name: string;
    price: number;
}

// function displayProductDetail(shoppingItem: ProductDetail) {

// }

// 2. 특정 상품의 상세정보를 나타내기위한 함수
type ShoppingItem1 = Pick<Product, 'id' | 'name' | 'price'>;
function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) {

}

// interface UpdateProduct{
//     id?: number;
//     name?: string;
//     price?: number;
//     brand?: string;
//     stock?: number;
// }

type UpdateProduct = Partial<Product>

// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
function updateProductItem(productItem: Partial<Product>) {

}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
    username: string;
    email: string;
    profilePhotoUrl: string;
}

// interface UserProfileUpdate{
//     username?: string;
//     email?: string;
//     profilePhotoUrl?: string;
// }

// #1
// type UserProfileUpdate = {
//     username?: UserProfile['username'];
//     email?: UserProfile['email'];
//     profilePhotoUrl?: UserProfile['profilePhotoUrl'];
// }

// #2 반복문을 돌렸다고? => 맵드타입??
// type UserProfileUpdate = {
//     [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p];
// }

type UserProfileKeys = keyof UserProfile // 이 부분이 'username' | 'email' | 'profilePhotoUrl' 이 되므로

// #3
type UserProfileUpdate = {
    [p in keyof UserProfile]?: UserProfile[p];
}

// #4
type Subset<T> = {
    [p in keyof T]?: T[p]
}
