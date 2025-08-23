const members = [
  { 
    id: 1, 
    name: "WE WANT", 
    profileImgs: [
      "images/liyu8.jpg", 
      "images/liyu9.jpg", 
      "images/liyu7.jpg"
    ], 
    detailImg: "images/liyu-pro1.jpg", 
    bio: "강민이가 생각한 강민이의 이미지는 잘생긴 강아지." 
  },
  { 
    id: 2, 
    name: "YOO KANG MIN'S", 
    profileImgs: [
      "images/liyu44.jpg", 
      "images/liyu45.jpg", 
      "images/liyu46.jpg"
    ], 
    detailImg: "images/liyu-pro2.jpg", 
    bio: "강민이가 연습하며 생긴 습관은 주변을 많이 챙기기." 
  },
  { 
    id: 3, 
    name: "DEBUT", 
    profileImgs: [
      "images/liyu40.jpg", 
      "images/liyu39.jpg"
    ], 
    detailImg: "images/liyu-pro3.jpg", 
    bio: "강민이가 도전하고 싶은 무대 컨셉은 귀여운 청량 컨셉!" 
  },
  { 
    id: 4, 
    name: "崔立于", 
    profileImgs: [
      "images/liyu32.jpg", 
      "images/liyu33.jpg"
    ], 
    detailImg: "images/liyu-pro4.jpg", 
    bio: "강민이의 최대 강점은 웃는 걸 제일 잘해요!" 
  },
  { 
    id: 5, 
    name: "유강민", 
    profileImgs: [
      "images/liyu35.jpg", 
      "images/liyu34.jpg"
    ], 
    detailImg: "images/liyu-pro5.jpg", 
    bio: "하루하루를 소중하게 여기고 무대 하나하나에 제가 할 수 있는 최선을 다하겠습니다!" 
  },
  { 
    id: 6, 
    name: "YOO KANG MIN", 
    profileImgs: [
      "images/liyu22.jpg", 
      "images/liyu23.jpg",
      "images/liyu24.jpg"
    ], 
    detailImg: "images/liyu-pro6.jpg", 
    bio: "과거 지원서 쓰던 강민이에게 한마디 너 잘할거야." 
  },
  { 
    id: 7, 
    name: "#사랑댕댕이", 
    profileImgs: [
      "images/liyu17.jpg", 
      "images/liyu18.jpg"
    ], 
    detailImg: "images/liyu-pro7.jpg", 
    bio: "지금 강민이에게 힘이 되는 한마디는 걱정하지 말고 직진! 걱정하고 긴장해도 바뀌는거 없다." 
  },
  { 
    id: 8, 
    name: "#기대해유~강민", 
    profileImgs: [
      "images/liyu31.jpg", 
      "images/liyu30.jpg"
    ], 
    detailImg: "images/liyu-pro8.jpg", 
    bio: "미래 파이널을 앞둔 강민이에게 한마디 데뷔하자!!" 
  },
  { 
    id: 9, 
    name: "#내가 최고얌", 
    profileImgs: [
      "images/liyu16.jpg", 
      "images/liyu15.jpg"
    ], 
    detailImg: "images/liyu-pro9.jpg", 
    bio: "강민이가 남기는 말 한마디 행복하게 해드릴게요 ㅎㅎ" 
  }
];

// 스크롤 등장 훅
function useScrollAnimation() {
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if(ref.current) observer.unobserve(ref.current); };
  }, []);

  return [ref, visible];
}

// 카드
function MemberCard({ member, onClick }) {
  const [ref, visible] = useScrollAnimation();
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (!member.profileImgs || member.profileImgs.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % member.profileImgs.length);
    }, 3000); // 3초마다 변경
    return () => clearInterval(interval);
  }, [member.profileImgs.length]);

  return React.createElement(
    "div",
    {
      ref: ref,
      className: `bg-white rounded-lg shadow-md p-4 sm:p-6 text-center cursor-pointer transform transition duration-500 ${
        visible ? "animate-fadeInUp" : "opacity-0"
      }`,
      onClick: () => onClick(member)
    },
    React.createElement("img", {
      src: member.profileImgs[index],
      alt: member.name,
      loading: "lazy",
      className: "w-52 h-72 mx-auto rounded-lg object-cover transition duration-700 ease-in-out"
    }),
    React.createElement("h2", {
      className: "text-lg sm:text-xl font-semibold mt-2",
      style: { fontFamily: "Sequel100Black, sans-serif" }
    }, member.name)
  );
}

// SNS 아이콘 섹션
function SocialSection() {
  const [ref, visible] = useScrollAnimation();
  return React.createElement(
    "div",
    { ref: ref, className: `mt-12 flex justify-center space-x-6 opacity-0 transform translate-y-10 transition duration-700 ${visible ? "opacity-100 translate-y-0" : ""}` },
    React.createElement("a", { href: "https://youtube.com/@boysplanet.official?si=uWoML6FSkZG1qDg1", target: "_blank", rel: "noopener noreferrer" },
      React.createElement("img", { src: "images/youtube.png", alt: "YouTube", className: "w-8 h-8 sm:w-10 sm:h-10 hover:scale-125 transition transform duration-300" })
    ),
    React.createElement("a", { href: "https://www.instagram.com/boysplanet.official?igsh=MXJpYzVjeGljdzVyeg==", target: "_blank", rel: "noopener noreferrer" },
      React.createElement("img", { src: "images/instagram.png", alt: "Instagram", className: "w-8 h-8 sm:w-10 sm:h-10 hover:scale-125 transition transform duration-300" })
    ),
    React.createElement("a", { href: "https://x.com/_mnetboysplanet?s=21", target: "_blank", rel: "noopener noreferrer" },
      React.createElement("img", { src: "images/x.png", alt: "X", className: "w-8 h-8 sm:w-10 sm:h-10 hover:scale-125 transition transform duration-300" })
    )
  );
}

// 메인 앱
function App() {
  const [selectedMember, setSelectedMember] = React.useState(null);
  const handleCloseModal = () => setSelectedMember(null);

  return React.createElement(
    "div",
    { className: "container mx-auto p-4" },

    // 제목 (왼쪽 상단 고정)
    React.createElement("h1", {
      className: "text-2xl sm:text-3xl font-bold mb-6 fixed top-4 left-4 z-50",
      style: { fontFamily: "Sequel100Black, sans-serif" }
    }, "YOO KANG MIN"),

    // 카드 그리드
    React.createElement(
      "div",
      { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16" },
      members.map(member =>
        React.createElement(MemberCard, { key: member.id, member: member, onClick: setSelectedMember })
      )
    ),

    React.createElement(SocialSection),

    // 모달
selectedMember &&
React.createElement("div", {
  className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
  onClick: handleCloseModal
},
  React.createElement("div", {
    className: "bg-white p-6 rounded-lg w-11/12 max-w-md relative animate-fadeInModal",
    onClick: e => e.stopPropagation()
  },
    React.createElement("button", { className: "absolute top-2 right-2 text-gray-500", onClick: handleCloseModal }, "X"),
    React.createElement("img", { src: selectedMember.detailImg, alt: selectedMember.name, className: "w-full h-72 mx-auto rounded-lg object-cover" }),
    React.createElement("h2", {
      className: "text-2xl sm:text-3xl font-bold mt-4 text-center",
      style: { fontFamily: "Sequel100Black, sans-serif" }
    }, selectedMember.name),
    React.createElement("p", { className: "mt-2 text-gray-600 text-center text-sm sm:text-base" }, selectedMember.bio)
  )
)
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));
