interface Form {
  description: string,
  age: number,
  year: number,
  location: string[],
  status: boolean,
  skills: SKILLARR[],
  jobs: JOBITEM[]
  projects: PROJECTITEM[]
}
interface SKILLARR {
  key: number,
  value: string
}
interface JOBITEM {
  company: string,
  job: string,
  date: string,
  details: string
}
interface PROJECTITEM{
  name: string,
  info:string,
  details:string
}
export {
    Form,SKILLARR,JOBITEM,PROJECTITEM
}
