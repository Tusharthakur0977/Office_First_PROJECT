export const USER = "USER";
export const saveData = async (key, value, onSave) => {
  try {
    await localStorage.setItem(key, value);
    onSave(true);
  } catch (e) {
    onSave(false);
  }
};

export const removeData = async (key, onSave) => {
  try {
    localStorage.removeItem(key);
    onSave(true);
  } catch (e) {
    onSave(false);
  }
};

export const readData = async (key, onRead) => {
  try {
    const value = await localStorage.getItem(key);
    if (value !== null) {
      onRead(value);
      return;
    } else {
      onRead(null);
      return;
    }
  } catch (e) {
    onRead(null);
  }
};