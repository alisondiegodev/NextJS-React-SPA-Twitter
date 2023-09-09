export default async function GithubUser() {
  const response = await fetch("https://api.github.com/users/alisondiegodev");
  const data = await response.json();

  return (
    <div>
      <h1>{JSON.stringify(data)}</h1>
      <img src={data.avatar_url} alt="" />
    </div>
  );
}
