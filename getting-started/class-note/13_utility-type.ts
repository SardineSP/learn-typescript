interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 상품 목록을 받아오기 위한 API함수
function fetchProducts(): Promise<Product[]> {
    // 
}

// 만약 새로운 함수에서 기존 interface의 일부만 사용한다면, 보통은 아래와 같이 Product의 일부만 가져오는 형식으로 interface를 작성하게 됨
interface ProductDetail {
    id: number;
    name: string;
    price: number;
}

function displayProductDetail(shoppingItem:
    { id: number; name: string; price: number }) {

}