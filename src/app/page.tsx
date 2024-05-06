"use client";

export default function Home() {
  const getApi = async () => {
    try {
      const res = await fetch(
        "https://deep-index.moralis.io/api/v2.2/0x879b8a63aed92aba61f1a96a9ec3c1e/nft",
        {
          headers: {
            "x-api-key":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6IjE0NWVhMDU5LWE2YmEtNDQ1Mi1iMTJiLTFhNWNhODJjMjhiMyIsIm9yZ0lkIjoiMzkwOTg3IiwidXNlcklkIjoiNDAxNzU1IiwidHlwZUlkIjoiMmFiYTM2ZDEtZjFkZS00YzNmLWJhM2EtYjUwOTk4ODNjZmRmIiwidHlwZSI6IlBST0pFQ1QiLCJpYXQiOjE3MTQ5MTAzOTQsImV4cCI6NDg3MDY3MDM5NH0.AxNLMh0IzLeoiyujxIVFjzwX67DA2sNcgyZWwqLzTMA",
          },
        },
      );
      const data = res.json();
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };
  console.log(getApi());
  return <h1>help my</h1>;
}
