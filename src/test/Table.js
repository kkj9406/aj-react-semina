import React, { useState, useEffect } from "react";

function Table() {
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // 페이지가 변경될 때마다 API를 호출하여 결과 값을 업데이트함
    fetchData(page);
  }, [page]);

  function fetchData(page) {
    setLoading(true);
    fetch(`https://swapi.dev/api/people/?page=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setPage(page);
        setCount(data.count);
        // 한 페이지에 10개의 결과만 보여줌
        setResults(data.results.slice(0, 10));
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }

  /** 이전 페이지로 이동 */
  function handlePrevClick() {
    if (page > 0) {
      setPage(page - 1);
    }
  }

  /** 다음 페이지로 이동 */
  function handleNextClick() {
    if (page < Math.ceil(count / 10)) {
      setPage(page + 1);
    }
  }

  /** 첫 페이지로 이동 */
  function handleFirstClick() {
    if (page > 0) {
      setPage(1);
    }
  }

  /** 마지막 페이지로 이동 */
  function handleLastClick() {
    const lastPage = Math.ceil(count / 10);
    if (page < lastPage) {
      setPage(lastPage);
    }
  }

  // 현재 페이지가 첫 페이지인지, 마지막 페이지인지 확인
  const isFirstPage = page === 1;
  const isLastPage = page === Math.ceil(count / 10);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>NAME</th>
            <th>HEIGHT</th>
            <th>MASS</th>
          </tr>
        </thead>
        <tbody>
          {/* 결과 값을 테이블에 표시 */}
          {!loading &&
            results.map(({ name, height, mass }) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{height}</td>
                <td>{mass}</td>
              </tr>
            ))}
        </tbody>
      </table>
      {/* 페이지네이션 버튼 */}
      <div className="pagination">
        <button
          className="first-page-btn"
          onClick={handleFirstClick}
          disabled={isFirstPage || loading || results.length === 0}
        >
          first
        </button>
        <button
          className="previous-page-btn"
          onClick={handlePrevClick}
          disabled={isFirstPage || loading || results.length === 0}
        >
          previous
        </button>
        <button
          className="next-page-btn"
          onClick={handleNextClick}
          disabled={isLastPage || loading || results.length === 0}
        >
          next
        </button>
        <button
          className="last-page-btn"
          onClick={handleLastClick}
          disabled={isLastPage || loading || results.length === 0}
        >
          last
        </button>
      </div>
    </div>
  );
}

export default Table;
/*
페이지네이션(pagination)으로 테이블을 렌더링하는 React 컴포넌트를 구현하시오.
1. 테이블은 table 클래스명을 가지며, NAME, HEIGHT, Last Name 3개의 열을 가지고 있다.
테이블은 https://swapi.dev/api/people/ 엔드포인트에 가져올 수 있는 모의 데이터로 채워진다.
이 엔드포인트는 page 매개변수가 필수로 필요하다.(page는 0부터 시작하며, 이 매개변수를 제공하지 않으면
API가 오류를 반환한다.) 다음은 JSON 응답 포맷의 예이다.
{
	"count": 82,
	"next": "https://swapi.dev/api/people/?page=2",
	"previous": null,
	"results": [
		{
			"name": "Luke Skywalker",
			"height": "172",
			"mass": "77",
			"hair_color": "blond",
			"skin_color": "fair",
			"eye_color": "blue",
			"birth_year": "19BBY",
			"gender": "male",
			"homeworld": "https://swapi.dev/api/planets/1/",
			"films": [
				"https://swapi.dev/api/films/1/",
				"https://swapi.dev/api/films/2/",
				"https://swapi.dev/api/films/3/",
				"https://swapi.dev/api/films/6/"
			],
			"species": [],
			"vehicles": [
				"https://swapi.dev/api/vehicles/14/",
				"https://swapi.dev/api/vehicles/30/"
			],
			"starships": [
				"https://swapi.dev/api/starships/12/",
				"https://swapi.dev/api/starships/22/"
			],
			"created": "2014-12-09T13:50:51.644000Z",
			"edited": "2014-12-20T21:17:56.891000Z",
			"url": "https://swapi.dev/api/people/1/"
		},
		...
	]
}
count 필드의 값은 총 결과 수를 가리키며, results 필드에는 주어진 페이지의 항목들이 포함된다.
페이지 당 10개의 항목을 반환하며, 마지막 페이지에는 더 적은 수의 항목을 반환할 수 있다. 쿼리
매개변수 page가 총 페이지 수보다 큰 경우에 요청이 전송되면 results 필드는 비어 있게 된다.
2. 최초에는 데이터의 처음 페이지로 테이블 본문(tbody)을 채워야 한다.
3. 페이지네이션 섹션은 pagination 클래스명을 가지며, 가로로 쌓인 네 개의 버튼으로 구성된다.
- 첫 번째 버튼을 클릭하면 데이터의 처음 페이지로 이동하고, 두 번째 버튼을 클릭하면 데이터의 이전
페이지로 이동한다. 현재 페이지가 처음 페이지이거나 데이터 페이지가 현재 로드 중일 때는 버튼이 비활성화
된다. 버튼의 클래스명은 (차례로) first-page-btn 및 previous-page-btn 이다.
- 마찬가지로, 세 번째 버튼을 클릭하면 데이터의 다음 페이지로 이동하고, 마지막 버튼을 클릭하면 데이터의
마지막 페이지로 이동한다. 현재 페이지가 마지막 페이지이거나 데이터 페이지가 현재 로드 중일 때는
버튼이 비활성화된다. 버튼의 클래스명은 (차례로) next-page-btn 및 last-page-btn이다.
- 버튼의 내용은 (차례로) fist, previous, next, last 이어야 한다.
4. 데이터 로드 중에는 모든 버튼이 비활성화되어야 한다.
5. 컴포넌트 내보내기는 단일 객체 내보내기(default export)여야 하고, 함수 또는 클래스일 수 있다.
6. 요청을 하는 데는 Fetch API를 사용한다.
7. 데이터를 렌더링할 때 tbody를 사용하는 것에 유의한다.

가정(Assumptions)
- 쿼리 매개변수 page가 제공될 때 모의 https://swapi.dev/api/people/ API에 대한 요청은 실패하지 않는다고 가정한다.
- 컴포넌트는 "Preview" 탭에 표시된다. 테스트 목적으로 사용할 수 있다.
- 디자인/스타일링은 평가 대상에서 제외되며 점수에 영향을 미치지 않는다. 요구사항을 구현하는데만 집중한다.
- 브라우저의 개발자 도구를 통하여 디버깅 목적으로 console.log 및 console.error를 사용할 수 있다.
- react(v17.0.2) 패키지 임포트만 허용하며, 코드의 최상단에 배치한다.

예제1(Example 1)
요구사항에서 언급했듯이 최초에는 데이터의 첫 페이지가 표시되어야 한다. 즉, 컴포넌트 마운팅 중에
https://swapi.dev/api/people/?page=1 로 요청을 해야 한다.

예제2(Example 2)
현재 데이터의 세 번째 페이지가 표시되어 있다고 가정한다. 다음 버튼(비활성화 상태가 아니라고 가정)을
클릭하면, https://swapi.dev/api/people/?page=4에 요청이 트리거 되고, 이전 버튼을 클릭하면 요청이 
https://swapi.dev/api/people/?page=2 로 전송된다.

예제3(Example 3)
https://swapi.dev/api/people/?page=1 응답에서 온 카운트 값이 41이라고 가정한다. 마지막 버튼을 클릭하면
데이터의 5번째 페이지로 이동하고 https://swapi.dev/api/people/?page=5에 요청을 해야 한다.
*/
