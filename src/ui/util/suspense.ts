export const  suspeseOverPromise = <T>(promise: Promise<T>) => {
    let status = 'pending';
    let data: T;
    let error: any;
    let suspender = promise.then(
      (r) => {
        status = 'success';
        data = r;
      },
      (e) => {
        status = 'error';
        error = e;
      }
    );
    return {
        read() {
            if (status === 'pending') {
                throw suspender;
            } else if (status === 'error') {
                return {error};
            } else {
                return {data};
            }
        }
    }
}