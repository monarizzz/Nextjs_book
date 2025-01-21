"use server";

const paths = [{ name: "taro" }, { name: "hanako" }, { name: "sachilp" }];

export async function generateStaticParams() {
  return paths;
}

export default async function Name({ params }) {
  const result = paths.some((path) => path.name === params.name);
  return (
    <main>
      {result ? (
        <>
          <h1 className="title">Name = &quot;{params.name}&quot;</h1>
          <p className="msg">{params.name}さん、こんにちは！</p>
        </>
      ) : (
        <>
          <h1 className="title">&quot;{params.name}&quot;</h1>
          <p className="msg">「{params.name}」は使えません。</p>
        </>
      )}
      <div>
        <a href="/">go back!!</a>
      </div>
    </main>
  );
}
