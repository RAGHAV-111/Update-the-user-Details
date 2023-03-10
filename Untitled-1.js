async function editExpense(formData) {
    try {
      const response = await axios.put(`'https://crudcrud.com/api/bdd99c4da68043df8192ae03862c81b9/appointmentData/${formData.get('expenseId')}`, {
        name: formData.get('name'),
        email: formData.get('email'),
        phoneNumber: formData.get('phoneNumber'),
      });
      console.log(response);
      return response.data;
    } catch (error) {
      throw new Error(`Error editing expense: ${error}`);
    }
  }
